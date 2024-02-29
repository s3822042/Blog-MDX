import { Metadata } from "next"
import { notFound } from "next/navigation"
import { allArticles } from "contentlayer/generated"

import "@/styles/mdx.css"

import { DocPageProps } from "@/types/doc"
import { siteConfig } from "@/config/site"
import { absoluteUrl } from "@/lib/utils"
import { Mdx } from "@/components/layouts/mdx-component"
import { SingleArticle } from "@/components/modules/articles/single-article"

export async function getDocFromParams({ params }: DocPageProps) {
  const slug = params.slug?.join("/") || ""
  const article = allArticles.find((doc: any) => doc.slugAsParams === slug)

  if (!article) {
    return null
  }

  return article
}

export async function generateMetadata({
  params,
}: DocPageProps): Promise<Metadata> {
  const article = await getDocFromParams({ params })

  if (!article) {
    return {}
  }

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      url: absoluteUrl(article.slug),
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [siteConfig.ogImage],
      creator: siteConfig.author.name,
    },
  }
}

export default async function SingleArticlePage({ params }: DocPageProps) {
  const article = await getDocFromParams({ params })

  if (!article) {
    notFound()
  }

  return (
    <SingleArticle article={article}>
      <Mdx code={article.body.code} />
    </SingleArticle>
  )
}
