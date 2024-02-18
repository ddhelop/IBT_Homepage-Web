import mongoose from 'mongoose'

const newsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    img: { type: String, required: true },
    id: {
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
const ESGPDFSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    pdf: { type: String, required: true },
    id: { type: Number, required: true },
  },
  { timestamps: true },
)
const pageSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    imgBig: {
      type: String,
      required: true,
    },
    titleBig: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    applications: {
      title: { type: String },
      img: { type: String },
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
    id: {
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
  esgPdfIdCounter: {
    type: Number,
    default: 0,
  },
  batteryPageIdCounter: {
    type: [Number],
    default: [0, 0, 0, 0],
  },
})
const orderSchema = new mongoose.Schema({
  id: { type: Number, default: 0 },
  postOrder: {
    type: [Number],
    default: [],
  },
  catelogOrder: {
    type: [Number],
    default: [],
  },
  //기부장학재단 pdf용
  ESGPDFOrder: {
    type: [Number],
    default: [],
  },
  //배터리 상세페이지
  batteryPageOrder: {
    type: [[Number]],
    default: [[], [], [], []],
  },
})

export const Order = mongoose.models?.Order || mongoose.model('Order', orderSchema)
export const Counter = mongoose.models?.Counter || mongoose.model('Counter', counterSchema)

export const ESGPdf = mongoose.models?.ESGPdf || mongoose.model('ESGPdf', ESGPDFSchema)
export const DefensePage = mongoose.models?.DefensePage || mongoose.model('DefensePage', pageSchema)
export const IndustryPage = mongoose.models?.IndustryPage || mongoose.model('IndustryPage', pageSchema)
export const PowerPage = mongoose.models?.PowerPage || mongoose.model('PowerPage', pageSchema)
export const EnergySavePage = mongoose.models?.EnergySavePage || mongoose.model('EnergySavePage', pageSchema)

export const Post = mongoose.models?.Post || mongoose.model('Post', newsSchema)
export const Catelog = mongoose.models?.Catelog || mongoose.model('Catelog', catelogSchema)
