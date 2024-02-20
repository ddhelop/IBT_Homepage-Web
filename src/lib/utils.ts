import mongoose from 'mongoose'
import { Counter } from './models'

interface Connection {
  isConnected?: any
}
const connection: Connection = {}

export const connectToDb = async (): Promise<void> => {
  try {
    if (connection.isConnected) {
      console.log('Using existing connection')
      return
    }
    const db = await mongoose.connect(process.env.MONGO as unknown as string)
    connection.isConnected = db.connections[0].readyState
  } catch (error: any) {
    console.log(error)
    throw new Error(error)
  }
}

export const toBase64 = (arr: any) => {
  arr = new Uint8Array(arr)
  return btoa(arr.reduce((data: any, byte: number) => data + String.fromCharCode(byte), ''))
}

export const reorderPosts = (posts: any, startIndex: number, endIndex: number) => {
  const newPostList = Array.from(posts)
  const [removed] = newPostList.splice(startIndex, 1)
  newPostList.splice(endIndex, 0, removed)
  return newPostList as unknown as any
}

export const getId = async (type: string) => {
  const counter = await Counter.findOne({ id: 0 })
  if (type == 'news') {
    let up = counter.postIdCounter + 1
    await Counter.updateOne({ id: 0 }, { postIdCounter: up })
    return up
  } else if (type == 'catelog') {
    let up = counter.catelogIdCounter + 1
    await Counter.updateOne({ id: 0 }, { catelogIdCounter: up })
    return up
  } else if (type == 'esg-pdf') {
    let up = counter.esgPdfIdCounter + 1
    await Counter.updateOne({ id: 0 }, { esgPdfIdCounter: up })
    return up
  } else if (!!Number(type)) {
    //문자열이 숫자일경우
    let tempArr = [...counter.batteryPageIdCounter]
    tempArr[Number(type)]++
    await Counter.updateOne({ id: 0 }, { batteryPageIdCounter: tempArr })
    return tempArr[Number(type)]
  } else {
    console.log('getId Failed', type)
  }
  //await를 하지 않아서, Counter 모델의 데이터가 변경되는 것을 기다리지 않고, 바로 값을 리턴했기 때문이다. async-await의 개념을 더 확실히 하자!
}

export const validateString = (value: unknown, maxLength: number): value is string => {
  if (!value || typeof value !== 'string' || value.length > maxLength) {
    return false
  }

  return true
}

export const getErrorMessage = (error: unknown): string => {
  let message: string

  if (error instanceof Error) {
    message = error.message
  } else if (error && typeof error === 'object' && 'message' in error) {
    message = String(error.message)
  } else if (typeof error === 'string') {
    message = error
  } else {
    message = 'Something went wrong'
  }

  return message
}
