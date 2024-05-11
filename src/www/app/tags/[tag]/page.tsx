import { allArticles } from "contentlayer/generated"

import { ViewsData } from "@/types/views"
import { deslugify } from "@/lib/utils"
import { ArticleCard } from "@/components/modules/articles/article-card"
import { serverClient } from "@/app/_trpc/serverClient"

interface TagsProps {
  params: {
    tag: string
  }
}

async function getArticlesFromParams(params: TagsProps["params"]) {
  const tag = params.tag

  const articles = allArticles.filter((article) =>
    article.tags.some((tagObj) => tagObj.title === tag)
  )

  return { tag, articles }
}

export async function generateStaticParams(): Promise<TagsProps["params"][]> {
  return Array.from(
    new Set(
      allArticles
        .flatMap((article) => article.tags.map((tag) => tag.title))
        .filter((tag): tag is string => tag !== undefined)
    )
  ).map((tag) => ({ tag }))
}

export default async function TagPage({ params }: TagsProps) {
  const { tag, articles } = await getArticlesFromParams(params)

  const viewsData = await Promise.all(
    articles.map(
      async (article) => await serverClient.getViews({ slug: article.slug })
    )
  )

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
      <div className="flex justify-center text-3xl">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-neutral-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Tag: {deslugify(tag)}
        </h1>
      </div>

      <main className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article: any, key) => (
          <ArticleCard
            key={key}
            title={article.title}
            description={article.description}
            slug={article.slug}
            links={article.links}
            category={article.category}
            tags={article.tags}
            readingTime={article.readingTime.text}
            published={article.published}
            publishedAt={article.publishedAt}
            views={viewsDataMap[article.slug] || 0}
          />
        ))}
      </main>
    </>
  )
}
