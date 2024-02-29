import { allArticles, Article } from "contentlayer/generated"

import { ArticleCard } from "@/components/modules/articles/article-card"

interface CategoryProps {
  params: {
    category: string
  }
}

async function getArticlesFromParams(params: CategoryProps["params"]) {
  const category = params.category
  const articles = allArticles.filter(
    (articles) => articles.category.toLowerCase() === category.toLowerCase()
  )
  return { category, articles }
}

export async function generateStaticParams(): Promise<
  CategoryProps["params"][]
> {
  return allArticles.filter((article) => ({
    category: article.category,
  }))
}

export default async function CategoryPostsPage({ params }: CategoryProps) {
  const { category, articles } = await getArticlesFromParams(params)

  return (
    <>
      <div className="flex justify-center text-3xl">
        <h1 className="md:leading-14 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl">
          Category: {category} ({articles.length}){" "}
        </h1>
      </div>

      <main className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article: Article, key: number) => (
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
          />
        ))}
      </main>
    </>
  )
}
