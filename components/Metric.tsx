import Image from "next/image";
import Link from "next/link";
import React from "react";

import { cn } from "@/lib/utils";

import { Avatar, AvatarFallback } from "./ui/avatar";

interface Props {
  imgUrl: string;
  alt: string;
  value: string | number;
  title: string;
  href?: string;
  textStyles: string;
  imgStyles?: string;
  isAuthor?: boolean;
  titleStyles?: string;
}

const Metric = ({
  imgUrl,
  alt,
  value,
  title,
  href,
  textStyles,
  imgStyles,
  isAuthor,
  titleStyles,
}: Props) => {
  const initials = alt
    .split("")
    .map((word: string) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
  const metricContent = (
    <>
      {imgUrl ? (
        <Image
          src={imgUrl}
          width={16}
          height={16}
          alt={alt}
          className={`rounded-full object-contain ${imgStyles}`}
        />
      ) : isAuthor ? (
        <Avatar className="size-6">
          <AvatarFallback className="primary-gradient font-space-grotesk font-bold  text-white">
            {initials}
          </AvatarFallback>
        </Avatar>
      ) : (
        ""
      )}
      <p className={`${textStyles} flex items-center gap-1`}>{value}</p>
      {title ? (
        <span className={cn(`small-regular line-clamp-1 `, titleStyles)}>
          {title}
        </span>
      ) : null}
    </>
  );

  return href ? (
    <Link href={href} className="flex-center gap-1">
      {metricContent}
    </Link>
  ) : (
    <div className="flex-center gap-1">{metricContent}</div>
  );
};

export default Metric;
