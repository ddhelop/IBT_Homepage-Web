import { Post, getId } from '@/lib/models'
import { connectToDb } from '@/lib/utils'
import { NextRequest, NextResponse } from 'next/server'

export const POST = async (request: NextRequest) => {
  const data = await request.formData() //Server에게 완전히 도달했고, 그 후에 data라는 변수로 들어왔는지 대기

  const title: string | null = data.get('title') as unknown as string
  const desc: string | null = data.get('description') as unknown as string
  //get이라는 함수를 사용하는 상황에서, 가져오는 객체의 타입이 불분명함, File, null, string 등등.

  if (!title || !desc) {
    //file이 만약 널일 경우, format에 맞추어 json 파일 반환
    return NextResponse.json({ success: false })
  }

  const file: File = data.get('image') as unknown as File //이미지 데이터
  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes) //용량이 크면 안됨!

  //console.log(buffer) //<Buffer 89 50 4e 47 0d 0a 1a 0a 00 00 00 0d 49 48 44 52 00 00 03 98 00 00 00 de 08 06 00 00 00 58 21 af 51 00 00 01 51 69 43 43 50 49 43 43 20 50 72 6f 66 69 ... 35439 more bytes>
  //Web Specific api인 File 객체를 JS와 서버 api가 인식못하는 byte array로 변환

  try {
    connectToDb()
    const newId = await getId()
    const newPost = new Post({ title, img: buffer, desc, postId: newId })
    newPost.save()
  } catch (e: any) {
    console.log(e)
  }

  return NextResponse.json({ success: true })
}
