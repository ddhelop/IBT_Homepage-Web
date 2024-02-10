import mongoose from 'mongoose'
import { S3Client, PutObjectCommand, GetObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3'
// presigned url 이용하기 위해 불러옴
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'

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

//*********************************** AWS S3 Functions *****************************************//
const awsAccessKey = process.env.MY_AWS_ACCESS_KEY
const awsSecretKey = process.env.MY_AWS_SECRET_KEY
const awsS3Bucket = process.env.MY_AWS_S3_BUCKET
const awsS3BucketRegion = process.env.MY_AWS_S3_BUCKET_REGION

// s3 클라이언트 연결
const s3 = new S3Client({
  credentials: {
    accessKeyId: awsAccessKey as string,
    secretAccessKey: awsSecretKey as string,
  },
  region: awsS3BucketRegion as string,
})
// file signedUrl 가져오기
export async function getSignedFileUrl(data: any) {
  const params = {
    Bucket: awsS3Bucket,
    Key: data.name,
  }
  const command = new PutObjectCommand(params)
  const url = await getSignedUrl(s3, command, {
    expiresIn: 360,
  })
  return url
}
