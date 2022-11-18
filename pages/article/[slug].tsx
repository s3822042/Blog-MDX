import { useMDXComponent } from "next-contentlayer/hooks";
import { allArticles } from "contentlayer/generated";
import { NextSeo } from "next-seo";
import SingleArticle from "components/SingleArticle";
import Comments from "components/comments";
import MDXComponents from "components/MDXComponents";

const SinglePost = ({ article }: any) => {
  const MDXContent = useMDXComponent(article.body.code);

  return (
    <>
      <NextSeo title={article.title} description={article.seoDescription} />

      <SingleArticle
        image={article.image}
        title={article.title}
        category={article.category}
        author={article.author}
      >
        <MDXContent components={{ ...MDXComponents } as any} />
        <Comments frontMatter={article} />
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
