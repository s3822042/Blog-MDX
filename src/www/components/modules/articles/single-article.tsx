"use client"

import React from "react"
import Image from "next/image"

import { getTableOfContents } from "@/lib/toc"
import { ScrollArea } from "@/components/elements/scroll-area"
import { DashboardTableOfContents } from "@/components/elements/toc"

interface SingleArticleProps {
  article: any
  children: React.ReactNode
}

export async function SingleArticle(props: SingleArticleProps) {
  const { article, children } = props
  const toc = await getTableOfContents(article.body.raw)

  return (
    <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <div className="flex flex-col items-center justify-center">
          <p className="text-center text-base font-semibold uppercase tracking-wide text-indigo-600 dark:text-white">
            {article.category}
          </p>
          <h1 className="mb-10 mt-2 text-center text-6xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {article.title}
          </h1>
          <div className="relative mb-10">
            <Image
              className="rounded-xl object-cover"
              src={article.links?.coverImg}
              width={720}
              height={400}
              alt="blog"
            />
          </div>
          <hr className="my-10 w-16 border-t border-indigo-600 dark:border-white" />
          <article className="prose-md prose prose-indigo mx-auto text-gray-500 lg:prose-lg dark:text-white">
            {children}
          </article>
        </div>
        <div className="mx-12">
          <hr className="mx-6 my-10 w-full border-t border-indigo-600 dark:border-white" />
          {/*<Comment postId={id} />*/}
        </div>
      </div>
      {article.toc && (
        <div className="hidden text-sm xl:block">
          <div className="sticky top-16 -mt-10 pt-4">
            <ScrollArea className="pb-10">
              <div className="sticky top-16 -mt-10 h-[calc(100vh-3.5rem)] py-12">
                <DashboardTableOfContents toc={toc} />
              </div>
            </ScrollArea>
          </div>
        </div>
      )}
    </main>
  )
}
