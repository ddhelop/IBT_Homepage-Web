import { links_coInfo } from './data'

export type SectionName = (typeof links_coInfo)[number]['name']

export type NewsProps = {
  title: string
  img: any
  postId: Number
  description: String
  createdAt: String
  updatedAt: String
  _id: String
}
