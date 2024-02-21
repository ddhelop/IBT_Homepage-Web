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
    type: [Number],
    default: [],
  },
})
//소분류 내용 저장용 스키마 - 항공/육상/해상...
const ListSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  itemFile: { type: String, required: true },
  itemTitle: { type: String, default: '' },
  itemSubtitle: { type: String, default: '' },
  itemAdvanced: { type: String, required: true },
  products: { type: Array, default: [] },
})
//중분류 내용 저장용 스키마 - 방산용 Ni-cd, 산업용 Ni-cd ...
const pageSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  data: {
    type: [ListSchema],
    required: true,
    default: [],
  },
})
export const Order = mongoose.models?.Order || mongoose.model('Order', orderSchema)
export const Counter = mongoose.models?.Counter || mongoose.model('Counter', counterSchema)

export const ESGPdf = mongoose.models?.ESGPdf || mongoose.model('ESGPdf', ESGPDFSchema)

export const BatteryPage = mongoose.models?.BatteryPage || mongoose.model('BatteryPage', pageSchema)

export const Post = mongoose.models?.Post || mongoose.model('Post', newsSchema)
export const Catelog = mongoose.models?.Catelog || mongoose.model('Catelog', catelogSchema)
