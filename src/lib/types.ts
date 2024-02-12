import { links_coInfo } from './data'

export type SectionName = (typeof links_coInfo)[number]['name']

export type NewsProps = {
  title: string
  img: string
  postId: Number
  description: string
  createdAt: string
  updatedAt: string
  _id: string
}

export type CatelogProps = {
  title: string
  img: string
  pdf: string
  catelogId: Number
  description: string
  createdAt: string
  updatedAt: string
  _id: string
}

export type ItemTypes = 'news' | 'catelog'
