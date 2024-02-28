import { NavigationLink } from "@/types/navbar"

export const SITE_URL: string = "https://ciara-blog.netlify.app/"

export const NUMBERS_OF_ARTICLES_PER_PAGE: number = 10

export const headerNavLinks: NavigationLink[] = [
  { href: "/categories", title: "Category" },
  { href: "/tags", title: "Tag" },
  { href: "/about", title: "About" },
]
