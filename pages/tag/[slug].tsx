import { allArticles } from "contentlayer/generated";
import { NextSeo } from "next-seo";
import { siteMetadata } from "utils/constant";
import { slugify } from "utils/helper";
import kebabCase from "utils/kebabCase";

export async function getStaticPaths() {
  let paths: any = [];
  // get all tag paths
  allArticles.map((article) => {
    article.tags.map((tag) => {
      const slug = slugify(tag);
      paths.push({ params: { slug } });
    });
  });
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  const filteredArticles = allArticles.filter((article: any) =>
    article.tags.map((t: any) => kebabCase(t)).includes(params.tag)
  );

  return { props: { articles: filteredArticles, tag: params.tag } };
}

export default function Tag({ articles, tag }: any) {
  // Capitalize first letter and convert space to dash
  const title = tag[0].toUpperCase() + tag.split(" ").join("-").slice(1);
  return (
    <>
      <NextSeo
        title={`${tag} - ${siteMetadata.author}`}
        description={`${tag} tags - ${siteMetadata.author}`}
      />
      <h1>Hello</h1>
    </>
  );
}
