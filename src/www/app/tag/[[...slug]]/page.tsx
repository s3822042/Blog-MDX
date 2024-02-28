import React from "react"
import Tag from "components/tags/Tag"
import { allDocs } from "contentlayer/generated"
import { select } from "utils/select"

import { siteConfig } from "@/config/site"

export function Tags({ articles }: any) {
  const counts = {} as any

  articles.forEach((category: any) => {
    category.tags.forEach((subCategory: any) => {
      const title = subCategory.title
      if (counts[title]) {
        counts[title]++
      } else {
        counts[title] = 1
      }
    })
  })

  const tags = Object.entries(counts).map(([title, count]) => ({
    title,
    count,
  }))

  return (
    <>
      <div className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
        <div className="space-x-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-14">
            Tags
          </h1>
        </div>
        <div className="flex max-w-lg flex-wrap">
          {Object.keys(tags).length === 0 && "No tags found."}
          {Object.values(tags).map((t: any) => {
            return (
              <div key={t} className="my-2 mr-5">
                <Tag text={t.title} />
                <span className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300">
                  {` (${t.count})`}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
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
    )

  return { props: { articles } }
}
