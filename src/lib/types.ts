export type NewsProps = {
  title: string
  img: string
  id: Number
  description: string
  createdAt: string
  updatedAt: string
  _id: string
}

export type CatelogProps = {
  title: string
  img: string
  pdf: string
  id: Number
  description: string
  createdAt: string
  updatedAt: string
  _id: string
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
  name: string
  img: string
}
