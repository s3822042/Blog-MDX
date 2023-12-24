import rehypeToc from "@jsdevtools/rehype-toc";
import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from "contentlayer/source-files";
import { parseISO, format } from "date-fns";
import readingTime from "reading-time";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrettyCode from "rehype-pretty-code";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";

const customizeTOC = (toc: any) => {
  try {
    const { children } = toc;
    const childrenOfChildren = children?.[0]?.children;
    if (!children?.length || !childrenOfChildren?.length) return null;
  } catch (e) {}
  return {
    type: "element",
    tagName: "div",
    properties: { className: "toc" },
    children: [
      {
        type: "element",
        tagName: "p",
        properties: { className: "ml-6 pt-2 pb-2 text-xl font-bold" },
        children: [
          {
            type: "text",
            value: "Table of Contents",
          },
        ],
      },
      ...(toc.children || []),
    ],
  };
};

const Tag = defineNestedType(() => ({
  name: "Tag",
  fields: {
    title: { type: "string" },
  },
}));

const Categories = defineNestedType(() => ({
  name: "Categories",
  fields: {
    title: { type: "string" },
  },
}));

const Author = defineNestedType(() => ({
  name: "Author",
  fields: {
    name: { type: "string", required: true },
    image: { type: "string", required: true },
  },
}));

const Article = defineDocumentType(() => ({
  name: "Article",
  filePathPattern: "**/*.mdx",
  contentType: "mdx",
  fields: {
    id: { type: "number", required: true },
    title: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
    description: { type: "string", required: true },
    seoDescription: { type: "string", required: true },
    categories: {
      type: "list",
      of: Categories,
    },
    tags: {
      type: "list",
      of: Tag,
    },
    author: {
      type: "nested",
      of: Author,
    },
    image: { type: "string", required: true },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (article) => `/${article._raw.flattenedPath}`,
    },
    slug: {
      type: "string",
      resolve: (article) => article._raw.flattenedPath,
    },
    publishedAt: {
      type: "string",
      resolve: (article) =>
        format(parseISO(article.publishedAt), "MMM dd, yyyy"),
    },
    readingTime: { type: "json", resolve: (doc) => readingTime(doc.body.raw) },
    wordCount: {
      type: "number",
      resolve: (article) => article.body.raw.split(/\s+/gu).length,
    },
  },
}));

export default makeSource({
  contentDirPath: "articles",
  documentTypes: [Article],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeCodeTitles,
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "one-dark-pro",
          onVisitLine(node: { children: string | any[] }) {
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightLine(node: { properties: { className: string[] } }) {
            node.properties.className.push("line--highlighted");
          },
          onVisitHighlightWord(node: { properties: { className: string[] } }) {
            node.properties.className = ["word--highlighted"];
          },
        },
      ],
      [
        rehypePrism,
        {
          showLineNumbers: true,
        },
      ],
      [rehypeToc, { customizeTOC }],
      rehypeStringify,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["anchor"],
          },
        },
      ],
    ],
  },
});
