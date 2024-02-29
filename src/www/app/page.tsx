import { allArticles } from "contentlayer/generated"

import { HomePage } from "@/components/pages/home-page"

export default function Home() {
  return <HomePage articles={allArticles} />
}
