import { Post } from '@/lib/models'
import { connectToDb } from '@/lib/utils'
import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const data = await request.formData() //Request로부터 데이터 가져옴
  //Server에게 완전히 도달했고, 그 후에 data라는 변수로 들어왔는지 대기
  const file: File | null = data.get('image') as unknown as File
  const title: string | null = data.get('title') as unknown as string
  const desc: string | null = data.get('description') as unknown as string
  //get이라는 함수를 사용하는 상황에서, 가져오는 객체의 타입이 불분명함, File, null, string 등등.
  if (!file || !title || !desc) {
    //file이 만약 널일 경우, format에 맞추어 json 파일 반환
    return NextResponse.json({ success: false })
  }
  //Web Specific api인 File 객체를 JS와 서버 api가 인식못하는 byte array로 변환
  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes) //용량이 크면 안됨!
  console.log(buffer)

  try {
    connectToDb()
    const newPost = new Post({ title, desc, img: buffer })
    await newPost.save()
    console.log('Save success')
    revalidatePath('/admin')
  } catch (e: any) {
    console.log(e)
  }
  return NextResponse.json({ success: true })
}

export async function GET(request: NextRequest) {
  try {
    connectToDb()
    const posts = await Post.find()
    return NextResponse.json(posts)
  } catch (err) {
    console.log(err)
    throw new Error('Failed to fetch posts!')
  }
}
