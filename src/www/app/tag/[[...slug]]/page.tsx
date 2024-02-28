import { allArticles } from "contentlayer/generated"

import { slugify } from "@/lib/utils"
import { ArticleCard } from "@/components/modules/articles/article-card"

export default function Tag({ articles, slug }: any) {
  // Capitalize first letter and convert space to dash
  const title = slug[0].toUpperCase() + slug.split(" ").join("-").slice(1)

  return (
    <>
      <div className="flex justify-center text-3xl">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Tag: {title} ({articles.length}){" "}
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
  allArticles.map((article: any) => {
    article.tags.map((tag: any) => {
      const slug = slugify(tag.title)
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

  // get all tag posts base on slug
  allArticles.map((article: any) => {
    article.tags.filter((tag: any) => {
      const tagSlug = slugify(tag.title)
      if (tagSlug === slug) {
        articles.push(article)
      }
    })
    return articles
  })

  return { props: { articles, slug } }
}
