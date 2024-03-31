import { Dispatch, SetStateAction } from 'react'

export type PaginationProps = {
  posts: NewsProps[]
}

export interface IPageNation {
  posts: NewsProps[]
  currentPage: number
  setCurrentPage: Dispatch<SetStateAction<number>>
  totalPageCount: number
}

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
  title: string[]
  itemFile: string
  itemTitle: string[]
  itemSubtitle: string[] | null
  itemAdvanced: string[]
  products?: Product[]
}
export type PostType = {
  id: number
  title: string
  desc?: string
  img?: string
  pdf?: string
}
export type Product = {
  id: number
  name: string[]
  img: string
}

export interface IContentBlockProps {
  title: string
  text: string
  background: string
}

export type ButtonProps = {
  text: string
  isForSubmit: boolean
  isActive: boolean
  func?: any
  isLoading?: boolean
}
export type PageType = 'hydrogen' | 'battery' | 'news'
