import ArticleCard from "components/articles/ArticleCard"
import { allArticles } from "contentlayer/generated"
import { NextSeo } from "next-seo"
import { siteMetadata } from "utils/constant"
import { slugify } from "utils/helper"

export default function Category({ articles, slug }: any) {
  const title = slug[0].toUpperCase() + slug.slice(1)
  return (
    <>
      <NextSeo
        title={`${slug} - ${siteMetadata.author}`}
        description={`${slug} tags - ${siteMetadata.author}`}
      />
      <div className="flex justify-center text-3xl">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Category: {title} ({articles.length}){" "}
        </h1>
      </div>

      <main className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map(
          ({
            title,
            description,
            slug,
            image,
            categories,
            tags,
            publishedAt,
            readingTime,
          }: any) => (
            <ArticleCard
              key={slug}
              title={title}
              description={description}
              slug={slug}
              image={image}
              categories={categories}
              tags={tags}
              dateTime={publishedAt}
              date={publishedAt}
              readingTime={readingTime.text}
            />
          )
        )}
      </main>
    </>
  )
}

export async function getStaticPaths() {
  let paths: any = []
  // get all category paths
  allArticles.map((article: any) => {
    article.categories.map((category: any) => {
      const slug = slugify(category.title)
      paths.push({ params: { slug } })
    })
  })

  return { paths, fallback: false }
}

export async function getStaticProps({
  params: { slug },
}: {
  params: { slug: any }
}) {
  let articles: any = []

  // get all category posts base on slug
  allArticles.map((article: any) => {
    article.categories.filter((category: any) => {
      const categorySlug = slugify(category.title)
      if (categorySlug === slug) {
        articles.push(article)
      }
    })
    return articles
  })

  return { props: { articles, slug } }
}
