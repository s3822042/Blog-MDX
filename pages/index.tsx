import Head from "next/head";
import ArticleCard from "components/ArticleCard";
import { allArticles } from "contentlayer/generated";
import { select } from "utils/select";
import SearchBar from "components/SearchBar";
import { useState } from "react";
export default function Home({ articles }: any) {
  const [searchValue, setSearchValue] = useState("");
  const filteredArticlePosts = articles.filter((article: any) =>
    article.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  console.log("articles", allArticles);
  return (
    <div>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex items-center justify-center">
        <SearchBar changeHandler={(e: any) => setSearchValue(e.target.value)} />
      </div>

      <main>
        {filteredArticlePosts.map(
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
              tags={tags}
              dateTime={publishedAt}
              date={publishedAt}
              readingTime={readingTime.text}
            />
          )
        )}
      </main>
    </div>
  );
}

export function getStaticProps() {
  const articles = allArticles
    .map((article: any) =>
      select(article, [
        "slug",
        "title",
        "description",
        "publishedAt",
        "readingTime",
        "author",
        "tags",
        "categories",
        "image",
      ])
    )
    .sort(
      (a: any, b: any) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );

  return { props: { articles } };
}
