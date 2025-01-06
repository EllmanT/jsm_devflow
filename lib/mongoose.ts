import mongoose, { Mongoose } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("Mongo URI is not defined");
}

interface MongooseCache {
  con: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

declare global {
  // eslint-disable-next-line no-var
  var mongoose: MongooseCache;
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { con: null, promise: null };
}

const dbConnect = async (): Promise<Mongoose> => {
  if (cached.con) {
    return cached.con;
  }
  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, {
        dbName: "DevFlow",
      })
      .then((result) => {
        console.log("Connected to mongodb");
        return result;
      })
      .catch((error) => {
        console.log("Failed to connect to Mongodb", error);
        throw error;
      });
  }
  cached.con = await cached.promise;
  return cached.con;
};

export default dbConnect;
