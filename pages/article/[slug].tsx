import { useMDXComponent } from "next-contentlayer/hooks";
import { NextSeo } from "next-seo";

import SingleArticle from "components/articles/SingleArticle";
import MDXComponents from "components/layout/MDXComponents";
import { allArticles } from "contentlayer/generated";

const SinglePost = ({ article }: any) => {
  const MDXContent = useMDXComponent(article.body.code);

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
        <MDXContent components={{ ...MDXComponents } as any} />
      </SingleArticle>
    </>
  );
};

export default SinglePost;

export async function getStaticPaths() {
  return {
    paths: allArticles.map((article) => ({
      params: { slug: article.slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const article = allArticles.find((article) => article.slug === params.slug);

  return { props: { article } };
}
