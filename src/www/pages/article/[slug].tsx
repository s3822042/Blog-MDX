import SingleArticle from "components/articles/SingleArticle"
import ViewCounter from "components/views/ViewCounter"
import { allArticles } from "contentlayer/generated"
import { useMDXComponent } from "next-contentlayer/hooks"
import { NextSeo } from "next-seo"

import MdxComponent from "@/components/layouts/mdx-component"

export default function SinglePost({ article }: any) {
  const MDXContent = useMDXComponent(article.body.code)

  return (
    <>
      <NextSeo title={article.title} description={article.seoDescription} />

      <SingleArticle
        image={article.image}
        id={article.id}
        title={article.title}
        categories={article.categories}
        author={article.author}
      >
        <ViewCounter slug={article.slug} method={"POST"} />
        <MDXContent components={{ ...MdxComponent } as any} />
      </SingleArticle>
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: allArticles.map((article) => ({
      params: { slug: article.slug },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }: any) {
  const article = allArticles.find((article) => article.slug === params.slug)

  return { props: { article } }
}