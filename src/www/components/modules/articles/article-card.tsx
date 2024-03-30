"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Tag } from "contentlayer/generated"

import { Article } from "@/types/articles"

export function ArticleCard(props: Article & { views: any }) {
  const {
    title,
    description,
    slug,
    links,
    publishedAt,
    category,
    readingTime,
    tags,
    views,
  } = props

  return (
    <div className="container mx-auto grid px-5 pb-3 pt-6 text-gray-600 lg:pb-6 lg:pt-12">
      <div className="border-opacity/60 h-full overflow-hidden rounded-lg border-2 border-gray-200">
        <Image
          className="w-full object-cover object-center md:h-36 lg:h-48"
          src={links?.coverImg || ""}
          width={720}
          height={400}
          alt="blog"
          priority
        />
        <div className="p-6">
          <Link href={`/categories/${category}`}>
            <h2 className="mb-1 text-xs font-medium tracking-widest text-gray-400">
              {category}
            </h2>
          </Link>

          <h1 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">
            {title}
          </h1>
          <div className="mb-3">
            <p className="mb-1 line-clamp-2 leading-relaxed">{description}</p>
            <span>
              <span>
                {Intl.NumberFormat("en-US", { notation: "compact" }).format(
                  views
                )}{" "}
                {" views"}
              </span>
            </span>
          </div>

          <div className="mb-3">
            {tags.map((tag: Tag, key) => {
              return (
                <Link href={`/tags/${tag.title}`} key={key}>
                  <span className="mr-2 font-bold hover:text-indigo-600">
                    #{tag.title}
                  </span>
                </Link>
              )
            })}
          </div>

          <div className="flex flex-wrap items-center">
            <a
              href={slug}
              className="inline-flex items-center text-indigo-500 md:mb-2 lg:mb-0"
            >
              Read More
              <svg
                className="ml-2 size-4"
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

            <span className="ml-auto mr-3 inline-flex items-center border-r-2 border-gray-200 py-1 pr-3 text-sm leading-none text-gray-400 md:ml-0 lg:ml-auto">
              {readingTime}
            </span>
            <span className="inline-flex items-center text-sm leading-none text-gray-400">
              <svg
                className="mr-1 size-4"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
              {publishedAt}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleCard
