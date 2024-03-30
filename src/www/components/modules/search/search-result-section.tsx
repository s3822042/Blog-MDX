import React from "react"

import { Article } from "@/types/articles"
import SearchFiltering from "@/components/modules/search/search-filtering"
import { serverClient } from "@/app/_trpc/serverClient"

interface SearchBarProps {
  articles: Article[]
}

async function SearchResultSection(props: SearchBarProps) {
  const { articles } = props

  const viewsData = await Promise.all(
    articles.map(
      async (article) => await serverClient.getViews({ slug: article.slug })
    )
  )

  return <SearchFiltering articles={articles} viewsData={viewsData} />
}

export default SearchResultSection
