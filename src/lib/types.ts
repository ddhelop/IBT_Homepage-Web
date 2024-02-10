import { links_coInfo } from './data'

export type SectionName = (typeof links_coInfo)[number]['name']

export type NewsProps = {
  title: String
  img: String
  postId: Number
  description: String
  createdAt: String
  updatedAt: String
  _id: String
}

export type CatelogProps = {
  title: String
  img: String
  pdf: String
  catelogId: Number
  description: String
  createdAt: String
  updatedAt: String
  _id: String
}

export type ItemTypes = 'news' | 'catelog'
