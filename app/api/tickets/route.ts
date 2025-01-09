import { NextResponse } from "next/server";

import tickets from "@/app/database";

export async function GET() {
  return NextResponse.json(tickets);
}

export async function POST(request: Request) {
  const body = await request.json();
  console.log(body);
  return NextResponse.json(body);
}



