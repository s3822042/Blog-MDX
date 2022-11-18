export const siteMetadata = {
  title: "Personal Blog",
  author: "Vo Thanh Luan",
  headerTitle: "Vo Thanh Luan",
  theme: "system", // system, dark or light
  locale: "en-US",
  authorUrl: "https://imgur.com/wnuKAT5.jpg",
  github: "https://github.com/s3822042",
  linkedin: "https://www.linkedin.com/in/vo-thanh-luan/",
  facebook: "https://www.facebook.com/profile.php?id=100008659242682",
  twitter: "https://twitter.com/luanvothanh__",
  comment: {
    provider: "giscus", // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO as string,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID as string,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY as string,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID as string,
      lazy: "lazy",
      mapping: "pathname", // supported options: pathname, url, title
      reactions: "1", // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: "0",
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: "light",
      // Place the comment box above the comments. options: bottom, top
      inputPosition: "bottom",
      // Choose the language giscus will be displayed in. options: en, es, zh-CN, zh-TW, ko, ja etc
      lang: "en",
      // theme when dark mode
      darkTheme: "transparent_dark",
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: "",
    },
  },
};

export const headerNavLinks = [
  { href: "/category", title: "Category" },
  { href: "/about", title: "About" },
];
