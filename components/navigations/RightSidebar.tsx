import Image from "next/image";
import Link from "next/link";
import React from "react";

import ROUTES from "@/constants/route";

import TagCard from "../cards/TagCard";

const topQuestions = [
  {
    _id: "1",
    title: "How to create custom hooks",
  },
  {
    _id: "2",
    title: "How to create reusable components",
  },
  {
    _id: "3",
    title: "How to implement Authjs with Nextjs",
  },
  {
    _id: "4",
    title: "How to use router properly",
  },
];

const popularTags = [
  { _id: "1", name: "React", questions: 100 },
  { _id: "2", name: "NextJs", questions: 500 },
  { _id: "3", name: "Python", questions: 600 },
  { _id: "4", name: "Angular", questions: 200 },
];
const RightSidebar = () => {
  return (
    <section className="custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto border-l p-6 pt-28 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
      </div>
      <div className="mt-7 flex w-full flex-col gap-[30px]">
        {topQuestions.map(({ _id, title }) => (
          <Link
            key={_id}
            href={ROUTES.PROFILE(_id)}
            className="flex cursor-pointer items-center justify-between gap-7"
          >
            <p className="body-medium text-dark500_light700">{title}</p>
            <Image
              src="/icons/chevron-right.svg"
              alt="Chevron"
              width={20}
              height={20}
              className="invert-colors"
            />
          </Link>
        ))}
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map(({ _id, name, questions }) => (
            <TagCard
              key={_id}
              _id={_id}
              name={name}
              questions={questions}
              showCount
              compact
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
