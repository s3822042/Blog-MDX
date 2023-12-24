import { useState } from "react";

import Head from "next/head";

import ArticleCard from "components/articles/ArticleCard";
import SearchBar from "components/SearchBar";
import { allArticles } from "contentlayer/generated";
import { select } from "utils/select";

export default function Home({ articles }: { articles: any[] }) {
  const [searchValue, setSearchValue] = useState("");

  const filteredArticlePosts = articles
    .filter((article) =>
      article.title.toLowerCase().includes(searchValue.toLowerCase()),
    )
    .map((article) => (
      <ArticleCard
        key={article.slug}
        title={article.title}
        description={article.description}
        slug={article.slug}
        image={article.image}
        tags={article.tags}
        categories={article.categories}
        dateTime={article.publishedAt}
        date={article.publishedAt}
        readingTime={article.readingTime.text}
      />
    ));

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
        {filteredArticlePosts}
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const articles = allArticles
    .map((article) =>
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
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)),
    );

  return { props: { articles } };
}
