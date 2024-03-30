"use client"

import React, { useState } from "react"
import Fuse from "fuse.js"

import { Article } from "@/types/articles"
import { ViewsData } from "@/types/views"
import ArticleCard from "@/components/modules/articles/article-card"

interface SearchBarProps {
  articles: Article[]
  viewsData: ViewsData[]
}

export default function SearchFiltering(props: SearchBarProps) {
  const { articles, viewsData } = props

  const [input, setInput] = useState(articles)

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    if (value.length === 0) {
      setInput(articles)
      return
    }

    const fuse = new Fuse(articles, {
      keys: ["title", "category", "tags"],
    })

    const results = fuse.search(value)
    const items = results.map((result) => result.item)
    items.sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    setInput(items)
  }

  const viewsDataMap: Record<string, number | bigint> = viewsData.reduce(
    (acc: Record<string, number | bigint>, curr: ViewsData) => {
      if (curr.status === "success" && curr.data.slug) {
        acc[curr.data.slug] = curr.data.views
      }
      return acc
    },
    {}
  )

  return (
    <>
      <div className="flex items-center justify-center">
        <form className="flex w-[40%] items-center">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="size-5 text-gray-500 dark:text-neutral-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="search"
              onChange={handleSearch}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Search..."
              required
            />
          </div>
        </form>
      </div>
      <main className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {input.map((article: any, key) => (
          <ArticleCard
            key={key}
            title={article.title}
            description={article.description}
            slug={article.slug}
            tags={article.tags}
            links={article.links}
            category={article.category}
            published={article.published}
            publishedAt={article.publishedAt}
            readingTime={article.readingTime.text}
            views={viewsDataMap[article.slug] || 0}
          />
        ))}
      </main>
    </>
  )
}
