import mongoose from 'mongoose'
import { useEffect, useState } from 'react'
import { Droppable, DroppableProps } from 'react-beautiful-dnd'

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
