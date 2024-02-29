import { LinksProperties, Tag } from "contentlayer/generated"

export interface Article {
  title: string
  publishedAt: string
  slug: string
  published: boolean
  description: string
  readingTime: string
  links?: LinksProperties | undefined
  category: string
  tags: Tag[]
}
