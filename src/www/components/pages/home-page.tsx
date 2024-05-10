import { Article } from "@/types/articles"
import { HeroSection } from "@/components/modules/banner/hero-section"
import SearchResultSection from "@/components/modules/search/search-result-section"

interface HomePageProps {
  articles: Article[]
}

const HomePage = (props: HomePageProps) => {
  const { articles } = props

  return (
    <div className="w-full">
      <HeroSection />
      <SearchResultSection articles={articles} />
    </div>
  )
}

export default HomePage
