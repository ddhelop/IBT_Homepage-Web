import mongoose from 'mongoose'
import { ItemTypes } from './types'

const newsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    img: { type: String, required: true },
    postId: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: false,
    },
  },
  { timestamps: true },
)

const catelogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    pdf: {
      type: String,
      required: true,
    },
    postId: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
)

const counterSchema = new mongoose.Schema({
  id: { type: Number, default: 0 },
  postIdCounter: {
    type: Number,
    default: 0,
  },
  catelogIdCounter: {
    type: Number,
    default: 0,
  },
})
const orderSchema = new mongoose.Schema({
  id: { type: Number, default: 0 },
  postOrder: {
    type: Array,
    default: [],
  },
  catelogOrder: {
    type: Array,
    default: [],
  },
  // ESGPDFOrder: {
  //   type: Array,
  //   default: [],
  // },
  // defensePageOrder: {
  //   type: Array,
  //   default: [],
  // },
  // industryPageOrder: {
  //   type: Array,
  //   default: [],
  // },
  // powerPageOrder: {
  //   type: Array,
  //   default: [],
  // },
  // energySavePageOrder: {
  //   type: Array,
  //   default: [],
  // },
})
export const Order = mongoose.models?.Order || mongoose.model('Order', orderSchema)
export const Counter = mongoose.models?.Counter || mongoose.model('Counter', counterSchema)

export const Post = mongoose.models?.Post || mongoose.model('Post', newsSchema)
export const Catelog = mongoose.models?.Catelog || mongoose.model('Catelog', catelogSchema)
