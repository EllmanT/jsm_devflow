import Image from "next/image";
import Link from "next/link";
import React from "react";

import ROUTES from "@/constants/route";
import { getHotQuestion } from "@/lib/actions/question.action";
import { getTopTags } from "@/lib/actions/tag.action";

import TagCard from "../cards/TagCard";
import DataRenderer from "../DataRenderer";

const RightSidebar = async () => {
  const [
    { success, data: hotQuestions, error },
    { success: tagSuccess, data: topTags, error: tagsError },
  ] = await Promise.all([getHotQuestion(), getTopTags()]);
  return (
    <section className="custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[266px]  flex-col gap-6 overflow-y-auto border-l p-6 pt-28 shadow-light-300 dark:shadow-none ">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <DataRenderer
          data={hotQuestions}
          empty={{
            title: "No question found",
            message: "No questions have been asked yet",
          }}
          success={success}
          error={error}
          render={(hotQuestions) => (
            <div className="mt-7 flex w-full flex-col gap-[30px]">
              {hotQuestions.map(({ _id, title }) => (
                <Link
                  key={_id}
                  href={ROUTES.QUESTION(_id)}
                  className="flex cursor-pointer items-center justify-between gap-7"
                >
                  <p className="body-medium text-dark500_light700 line-clamp-2">
                    {title}
                  </p>
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
          )}
        />
      </div>

      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <DataRenderer
          data={topTags}
          empty={{
            title: "No tags found",
            message: "No tags have been asked yet",
          }}
          success={tagSuccess}
          error={tagsError}
          render={(topTags) => (
            <div className="mt-7 flex flex-col gap-4">
              {topTags.map(({ _id, name, questions }) => (
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
          )}
        />
      </div>
    </section>
  );
};

export default RightSidebar;
