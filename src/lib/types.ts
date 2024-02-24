export type NewsProps = {
  _id: string
  title: string
  img: string
  id: Number
  desc: string
  createdAt: string
  updatedAt: string
}

export type NewsData = {
  data: NewsProps[]
}

export type CatalogProps = {
  title: string
  img: string
  pdf: string
  id: Number
  description: string
  createdAt: string
  updatedAt: string
  _id: string
}

export type SocialProps = {
  data: CatalogProps[]
}

export type Category = {
  id: number
  title: string
  itemFile: string
  itemTitle: string
  itemSubtitle: string | null
  itemAdvanced: string[]
  products?: Product[]
}
export type Product = {
  id: number
  name: string
  img: string
}

export interface IContentBlockProps {
  title: string
  text: string
  background: string
}
