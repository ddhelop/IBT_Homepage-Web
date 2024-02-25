'use server'

import { S3Client, PutObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3'
// presigned url 이용하기 위해 불러옴
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'

import dotenv from 'dotenv'
dotenv.config()
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
export async function getSignedFileUrl(data: { name: string; type: string }) {
  console.log(awsS3Bucket)
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
export async function deleteS3Object(key: string) {
  const command = new DeleteObjectCommand({
    Bucket: awsS3Bucket,
    Key: key,
  })
  try {
    const response = await s3.send(command)
    console.log('S3객체 삭제:', response)
  } catch (error) {
    console.log('S3객체 삭제 실패:', error)
  }
}
