import React from "react"
import { allArticles } from "contentlayer/generated"

import { TagsSection } from "@/components/modules/tags/tags-section"

export default function Tags() {
  const counts = new Map<string, number>()

  allArticles.forEach((article) => {
    const tags = article.tags || []
    tags.forEach((tag) => {
      if (tag && tag.title) {
        const title = tag.title
        counts.set(title, (counts.get(title) || 0) + 1)
      }
    })
  })

  const tagsArray: [string, number][] = Array.from(counts.entries())

  return (
    <>
      <div className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
        <div className="space-x-2 pb-8 pt-6 md:space-y-5">
          <h1 className="md:leading-14 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl">
            Tags
          </h1>
        </div>
        <div className="flex max-w-lg flex-wrap">
          {tagsArray.length > 0
            ? tagsArray.map(([tag, count]) => (
                <div key={tag} className="my-2 mr-5">
                  <TagsSection text={tag} />
                  <span className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300">
                    {` (${count})`}
                  </span>
                </div>
              ))
            : "No tags found."}
        </div>
      </div>
    </>
  )
}
