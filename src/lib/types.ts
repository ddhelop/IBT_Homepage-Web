import { links_coInfo } from './data'

export type SectionName = (typeof links_coInfo)[number]['name']

export type NewsProps = {
  title: String
  img: any

  description: String
  createdAt: String
  updatedAt: String
  _id: String
}
