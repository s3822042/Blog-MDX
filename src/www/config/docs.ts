import { MainNavItem, SidebarNavItem } from "@/types/nav"

interface DocsConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Category",
      href: "/categories",
    },
    {
      title: "Tags",
      href: "/tags",
    },
    {
      title: "About",
      href: "/about",
    },
  ],
  sidebarNav: [
    {
      title: "Algorithm and Data Structure",
      items: [
        {
          title: "Two sums",
          href: "/articles/algorithms/two-sum",
          items: [],
        },
        {
          title: "Valid Anagram",
          href: "/articles/algorithms/valid-anagram",
          items: [],
        },
      ],
    },
    {
      title: "System Design",
      items: [
        {
          title: "Scalability",
          href: "/articles/system-design/scalability",
          items: [],
        },
      ],
    },
  ],
}
