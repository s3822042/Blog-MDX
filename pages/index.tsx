import { useState } from "react";

import Head from "next/head";

import ArticleCard from "components/articles/ArticleCard";
import SearchBar from "components/SearchBar";
import { allArticles } from "contentlayer/generated";
import { select } from "utils/select";

export default function Home({ articles }: any) {
  const [searchValue, setSearchValue] = useState("");
  const filteredArticlePosts = articles.filter((article: any) =>
    article.title.toLowerCase().includes(searchValue.toLowerCase()),
  );

  return (
    <div className="w-full">
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex items-center justify-center">
        <SearchBar changeHandler={(e: any) => setSearchValue(e.target.value)} />
      </div>

      <main className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
              categories={categories}
              dateTime={publishedAt}
              date={publishedAt}
              readingTime={readingTime.text}
            />
          ),
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
      ]),
    )
    .sort(
      (a: any, b: any) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)),
    );

  return { props: { articles } };
}
