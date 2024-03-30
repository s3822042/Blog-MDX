"use client"

import React from "react"
import Image from "next/image"
import { Article } from "contentlayer/generated"

import { getTableOfContents } from "@/lib/toc"
import { ScrollArea } from "@/components/elements/scroll-area"
import { Separator } from "@/components/elements/separator"
import { DashboardTableOfContents } from "@/components/elements/toc"
import { ArticlesPager } from "@/components/modules/articles/articles-pager"
import { CommentForm } from "@/components/modules/comments/comment-form"
import { CommentListSection } from "@/components/modules/comments/comment-list-section"
import { trpc } from "@/app/_trpc/client"
import { ReportView } from "@/app/articles/[[...slug]]/views"

interface SingleArticleProps {
  article: Article
  children: React.ReactNode
}

export async function SingleArticle(props: SingleArticleProps) {
  const { article, children } = props
  const toc = await getTableOfContents(article.body.raw)

  const { data: viewsData } = trpc.getViews.useQuery({ slug: article.slug })

  if (!viewsData) return null

  return (
    <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <ReportView slug={article.slug} />
        <span>
          <span>
            {Intl.NumberFormat("en-US", { notation: "compact" }).format(
              viewsData.data.views
            )}{" "}
            {" views"}
          </span>
        </span>
        <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
          <div className="text-center text-base font-semibold uppercase tracking-wide text-indigo-600 dark:text-white sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
            {article.category}
            <div className="mb-10 mt-2 text-center text-4xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-white md:text-6xl">
              {article.title}
            </div>
          </div>
        </div>
        <div className="relative mb-10">
          <Image
            className="rounded-xl object-cover"
            src={article.links?.coverImg || "/images/cover.jpg"}
            width={720}
            height={400}
            alt="blog"
          />
        </div>
        <hr className="mx-auto my-10 w-16 border-t border-indigo-600 dark:border-white" />
        <div className="pb-12 pt-8">{children}</div>
        <ArticlesPager article={article} />
        <Separator className="my-10" />
        <CommentForm id={article._id} />
        <CommentListSection />
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
