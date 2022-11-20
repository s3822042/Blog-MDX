import React from "react";
import Image from "next/image";
import { slugify } from "utils/helper";
import Link from "next/link";

export default function ArticleCard({
  title,
  description,
  slug,
  image,
  categories,
  dateTime,
  readingTime,
  tags,
}: any) {
  const categoryTitle = slugify(categories[0].title);

  return (
    <div className="container grid px-5 py-6 mx-auto text-gray-600 body-font lg:py-12">
      <div className="h-full overflow-hidden border-2 border-gray-200 rounded-lg border-opacity-60">
        <Image
          className="object-cover object-center w-full lg:h-48 md:h-36"
          src={image}
          width={720}
          height={400}
          alt="blog"
        />
        <div className="p-6">
          <Link href={`/category/${categoryTitle}`}>
            <h2 className="mb-1 text-xs font-medium tracking-widest text-gray-400 title-font">
              {categories[0].title}
            </h2>
          </Link>

          <h1 className="mb-3 text-lg font-medium text-gray-900 title-font dark:text-white">
            {title}
          </h1>
          <p className="mb-3 leading-relaxed ">{description}</p>
          <div className="mb-3">
            {tags.map((tag: any) => {
              const tagTitle = slugify(tag.title);

              return (
                <Link href={`/tag/${tagTitle}`} key={tag}>
                  <span className="mr-2 font-bold hover:text-indigo-600">
                    #{tag.title}
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center ">
            <a
              href={`/article/${slug}`}
              className="inline-flex items-center text-indigo-500 md:mb-2 lg:mb-0"
            >
              Read More
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
            <span className="inline-flex items-center py-1 pr-3 ml-auto mr-3 text-sm leading-none text-gray-400 border-r-2 border-gray-200 lg:ml-auto md:ml-0">
              {readingTime}
            </span>
            <span className="inline-flex items-center text-sm leading-none text-gray-400">
              <svg
                className="w-4 h-4 mr-1"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
              {dateTime}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
