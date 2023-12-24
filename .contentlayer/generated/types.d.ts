// NOTE This file is auto-generated by Contentlayer

import type { Markdown, MDX, ImageFieldData, IsoDateTimeString } from 'contentlayer/core'
import * as Local from 'contentlayer/source-files'

export { isType } from 'contentlayer/client'

export type { Markdown, MDX, ImageFieldData, IsoDateTimeString }

/** Document types */
export type Article = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Article'
  id: number
  title: string
  publishedAt: string
  description: string
  seoDescription: string
  categories?: Categories[] | undefined
  tags?: Tag[] | undefined
  author?: Author | undefined
  image: string
  /** MDX file body */
  body: MDX
  url: string
  slug: string
  publishedAt: string
  readingTime: json
  wordCount: number
}  

/** Nested types */
export type Author = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Author'
  name: string
  image: string

}

export type Categories = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Categories'
  title?: string | undefined

}

export type Tag = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Tag'
  title?: string | undefined

}  

/** Helper types */

export type AllTypes = DocumentTypes | NestedTypes
export type AllTypeNames = DocumentTypeNames | NestedTypeNames

export type DocumentTypes = Article
export type DocumentTypeNames = 'Article'

export type NestedTypes = Author | Categories | Tag
export type NestedTypeNames = 'Author' | 'Categories' | 'Tag'

export type DataExports = {
  allDocuments: DocumentTypes[]
  allArticles: Article[]
}


export interface ContentlayerGenTypes {
  documentTypes: DocumentTypes
  documentTypeMap: DocumentTypeMap
  documentTypeNames: DocumentTypeNames
  nestedTypes: NestedTypes
  nestedTypeMap: NestedTypeMap
  nestedTypeNames: NestedTypeNames
  allTypeNames: AllTypeNames
  dataExports: DataExports
}

declare global {
  interface ContentlayerGen extends ContentlayerGenTypes {}
}

export type DocumentTypeMap = {
  Article: Article
}

export type NestedTypeMap = {
  Author: Author
  Categories: Categories
  Tag: Tag
}

 