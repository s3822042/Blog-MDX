// contentlayer.config.js
import {defineDocumentType, defineNestedType, makeSource} from "contentlayer/source-files";
import readingTime from "reading-time";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import remarkGfm from "remark-gfm";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeStringify from "rehype-stringify";
import rehypeToc from "@jsdevtools/rehype-toc";

var customizeTOC = (toc) => {
    try {
        const {children} = toc;
        const childrenOfChildren = children?.[0]?.children;
        if (!children?.length || !childrenOfChildren?.length)
            return null;
    } catch (e) {
    }
    return {
        type: "element",
        tagName: "div",
        properties: {className: "toc"},
        children: [
            {
                type: "element",
                tagName: "p",
                properties: {className: "ml-6 pt-2 pb-2 text-xl font-bold"},
                children: [
                    {
                        type: "text",
                        value: "Table of Contents"
                    }
                ]
            },
            ...toc.children || []
        ]
    };
};
var computedFields = {
    readingTime: {type: "json", resolve: (doc) => readingTime(doc.body.raw)},
    wordCount: {
        type: "number",
        resolve: (doc) => doc.body.raw.split(/\s+/gu).length
    },
    slug: {
        type: "string",
        resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, "")
    }
};
var Tag = defineNestedType(() => ({
    name: "Tag",
    fields: {
        title: {type: "string"}
    }
}));
var Categories = defineNestedType(() => ({
    name: "Categories",
    fields: {
        title: {type: "string"}
    }
}));
var Author = defineNestedType(() => ({
    name: "Author",
    fields: {
        name: {type: "string", required: true},
        image: {type: "string", required: true}
    }
}));
var Article = defineDocumentType(() => ({
    name: "Article",
    filePathPattern: "articles/*.mdx",
    contentType: "mdx",
    fields: {
        title: {type: "string", required: true},
        publishedAt: {type: "string", required: true},
        description: {type: "string", required: true},
        seoDescription: {type: "string", required: true},
        categories: {
            type: "list",
            of: Categories
        },
        tags: {
            type: "list",
            of: Tag
        },
        author: {
            type: "nested",
            of: Author
        },
        image: {type: "string", required: true}
    },
    computedFields
}));
var contentLayerConfig = makeSource({
    contentDirPath: "data",
    documentTypes: [Article],
    mdx: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
            rehypeCodeTitles,
            rehypeSlug,
            rehypePrism,
            [rehypeToc, {customizeTOC}],
            rehypeStringify,
            [
                rehypeAutolinkHeadings,
                {
                    properties: {
                        className: ["anchor"]
                    }
                }
            ]
        ]
    }
});
var contentlayer_config_default = contentLayerConfig;
export {
    contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-XPKWBBHQ.mjs.map
