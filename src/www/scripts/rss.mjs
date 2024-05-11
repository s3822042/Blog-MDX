import { writeFileSync } from "fs";
import RSS from "rss";
import { allArticles } from "../.contentlayer/generated/index.mjs";

const feed = new RSS({
  title: "Personal Blog",
  feed_url: "https://blog.luanvothanh.com/rss.xml",
  site_url: "https://blog.luanvothanh.com/",
});

allArticles
  .map((article) => ({
    title: article.title,
    description: article.description,
    url: `https://blog.luanvothanh.com${article.slug}`,
    date: article.publishedAt,
  }))
  .forEach((item) => {
    feed.item(item);
  });

writeFileSync("./public/rss.xml", feed.xml({ indent: true }));
