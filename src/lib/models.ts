import mongoose, { Schema } from 'mongoose'

//소분류 내용 저장용 스키마 - 항공/육상/해상...
const ListSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  title: { type: [String], required: true },
  itemTitle: { type: [String], default: '' },
  itemSubtitle: { type: [String], default: '' },
  itemAdvanced: { type: [String], required: true },
  itemFile: { type: String, required: true },
  products: { type: Array, default: [] },
})

//중분류 내용 저장용 스키마 - 방산용 Ni-cd, 산업용 Ni-cd ...
const pageSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  data: { type: [ListSchema], required: true, default: [] },
})
const postSubSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true, default: 0 },
    title: { type: Schema.Types.Mixed, required: true },
    //염문이 포함된 arr, 단순 한글 string 둘다 들어가야함
    desc: { type: String },
    img: { type: String },
    pdf: { type: String, required: true },
  },
  { timestamps: true },
)

const postSchema = new mongoose.Schema({
  id: { type: Number, default: 0 },
  data: { type: [postSubSchema], default: [] },
})
const adminSchema = new mongoose.Schema({
  id: { type: Number, default: 0 },
  secure: { type: String, default: '' },
})

export const User = mongoose.models?.User || mongoose.model('User', adminSchema)
export const HydrogenPage = mongoose.models?.HydrogenPage || mongoose.model('HydrogenPage', pageSchema)
export const BatteryPage = mongoose.models?.BatteryPage || mongoose.model('BatteryPage', pageSchema)
export const Post = mongoose.models?.Post || mongoose.model('Post', postSchema)
