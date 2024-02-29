import Link from "next/link"
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons"
import { Article } from "contentlayer/generated"
import { NavItem, NavItemWithChildren } from "types/nav"

import { docsConfig } from "@/config/docs"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/elements/button"

interface ArticlesPagerProps {
  article: Article
}

export function ArticlesPager({ article }: ArticlesPagerProps) {
  const pager = getPagerForArticle(article)

  if (!pager) {
    return null
  }

  return (
    <div className="flex flex-row items-center justify-between">
      {pager?.prev?.href && (
        <Link
          href={pager.prev.href}
          className={buttonVariants({ variant: "outline" })}
        >
          <ChevronLeftIcon className="mr-2 size-4" />
          {pager.prev.title}
        </Link>
      )}
      {pager?.next?.href && (
        <Link
          href={pager.next.href}
          className={cn(buttonVariants({ variant: "outline" }), "ml-auto")}
        >
          {pager.next.title}
          <ChevronRightIcon className="ml-2 size-4" />
        </Link>
      )}
    </div>
  )
}

export function getPagerForArticle(article: Article) {
  const flattenedLinks = [null, ...flatten(docsConfig.sidebarNav), null]
  const activeIndex = flattenedLinks.findIndex(
    (link) => article.slug === link?.href
  )
  const prev = activeIndex !== 0 ? flattenedLinks[activeIndex - 1] : null
  const next =
    activeIndex !== flattenedLinks.length - 1
      ? flattenedLinks[activeIndex + 1]
      : null
  return {
    prev,
    next,
  }
}

export function flatten(links: NavItemWithChildren[]): NavItem[] {
  return links
    .reduce<NavItem[]>((flat, link) => {
      return flat.concat(link.items?.length ? flatten(link.items) : link)
    }, [])
    .filter((link) => !link?.disabled)
}