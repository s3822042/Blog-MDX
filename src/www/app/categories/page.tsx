import React from "react"
import { allArticles } from "contentlayer/generated"

import { CategorySection } from "@/components/modules/categories/category-section"

export default function Categories() {
  const counts: Map<string, number> = allArticles.reduce((map, article) => {
    const category = article?.category
    map.set(category, (map.get(category) || 0) + 1)
    return map
  }, new Map())

  const categories: [string, number][] = Array.from(counts.entries())

  return (
    <>
      <div className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
        <div className="space-x-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-14">
            Categories
          </h1>
        </div>
        <div className="flex max-w-lg flex-wrap">
          {categories.length > 0
            ? categories.map(([category, count]) => (
                <div key={category} className="my-2 mr-5">
                  <CategorySection text={category} />
                  <span className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300">
                    {` (${count})`}
                  </span>
                </div>
              ))
            : "No categories found."}
        </div>
      </div>
    </>
  )
}
