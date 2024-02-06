import mongoose from 'mongoose'

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    img: { type: Buffer, required: true },
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
    default: 2,
  },
  catelogIdCounter: {
    type: Number,
    default: 0,
  },
})

export const Counter = mongoose.models?.Counter || mongoose.model('Counter', counterSchema)
export const Post = mongoose.models?.Post || mongoose.model('Post', postSchema)

export const getId = async () => {
  const counter = await Counter.findOne({ id: 0 })
  let up = counter.postIdCounter + 1
  await Counter.updateOne({ id: 0 }, { postIdCounter: up })
  //await를 하지 않아서, Counter 모델의 데이터가 변경되는 것을 기다리지 않고, 바로 값을 리턴했기 때문이다. async-await의 개념을 더 확실히 하자!
  return up
}
