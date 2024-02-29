import { writeFileSync } from "fs";
import { globby } from "globby";
import prettier from "prettier";

const generateSitemap = async () => {
  const pages = await globby(["app/*.tsx", "content/articles/*.mdx", "!app/_*.tsx"]);

  const urlTags = pages
    .map((file) =>
      file
        .replace("app", "")
        .replace("content/articles", "")
        .replace(".tsx", "")
        .replace(".mdx", "")
    )
    .map((path) => (path === "/index" ? "/" : path))
    .map(
      (path) => `
        <url>
            <loc>https://ciara-blog.netlify.app/article${path}</loc>
        </url>
      `
    )
    .join("");

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${urlTags}
    </urlset>
  `;

  const prettierConfig = await prettier.resolveConfig("./prettierrc");
  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: "html",
  });

  writeFileSync("public/sitemap.xml", await formatted);
};

generateSitemap().catch((error) => {
  console.error("Error generating sitemap:", error);
});
