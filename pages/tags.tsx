import React from "react";
import { select } from "utils/select";
import { allArticles } from "contentlayer/generated";
import Tag from "components/Tag";
import { NextSeo } from "next-seo";
import { siteMetadata } from "utils/constant";

export default function Tags({ articles }: any) {

  const tags = [
    { title: "react", count: 1 },
    { title: "redux", count: 2 },
    { title: "typescript", count: 1 },
  ];

  return (
    <>
      <NextSeo
        title={`Tags - ${siteMetadata.author}`}
        description="Things I blog about"
      />
      <div className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
        <div className="pt-6 pb-8 space-x-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-14">
            Tags
          </h1>
        </div>
        <div className="flex flex-wrap max-w-lg">
          {Object.keys(tags).length === 0 && "No tags found."}
          {Object.values(tags).map((t: any) => {
            return (
              <div key={t} className="mt-2 mb-2 mr-5">
                <Tag text={t.title} />
                <span className="-ml-2 text-sm font-semibold text-gray-600 uppercase dark:text-gray-300">
                  {` (${t.count})`}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const articles = allArticles
    .map((article: any) =>
      select(article, [
        "slug",
        "title",
        "description",
        "publishedAt",
        "readingTime",
        "author",
        "tags",
        "categories",
        "image",
      ])
    )
    .sort(
      (a: any, b: any) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );

  return { props: { articles } };
}
