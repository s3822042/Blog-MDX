import { allArticles } from "contentlayer/generated"

import { sortByDescending } from "@/lib/utils"
import HomePage from "@/components/pages/home-page"

export default function page() {
  const sortedArticles = sortByDescending(allArticles, "publishedAt")

  return <HomePage articles={sortedArticles} />
}
