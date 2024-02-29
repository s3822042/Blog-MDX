"use client"

import { Article } from "@/types/articles"
import { SearchResultSection } from "@/components/modules/search/search-result-section"

interface HomePageProps {
  articles: Article[]
}

export function HomePage(props: HomePageProps) {
  const { articles } = props

  return (
    <div className="w-full">
      <SearchResultSection articles={articles} />
    </div>
  )
}
