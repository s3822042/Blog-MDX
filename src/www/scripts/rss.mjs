import { writeFileSync } from "fs";
import RSS from "rss";
import { allArticles } from "../.contentlayer/generated/index.mjs";

const feed = new RSS({
  title: "My Blogs",
  feed_url: "https://ciara-blog.netlify.app/rss.xml",
  site_url: "https://ciara-blog.netlify.app/",
});

allArticles
  .map((article) => ({
    title: article.title,
    description: article.description,
    url: `https://ciara-blog.netlify.app/articles/${article.slug}`,
    date: article.publishedAt,
  }))
  .forEach((item) => {
    feed.item(item);
  });

writeFileSync("./public/rss.xml", feed.xml({ indent: true }));
