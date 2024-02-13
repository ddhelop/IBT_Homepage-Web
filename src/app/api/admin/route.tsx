'use server'

import { getId, getSignedFileUrl } from '@/lib/utils'
import { Catelog, Order, Post } from '@/lib/models'
import { connectToDb } from '@/lib/utils'
import { NextRequest, NextResponse } from 'next/server'

export const POST = async (request: NextRequest) => {
  const data = await request.formData() //Server에게 완전히 도달했고, 그 후에 data라는 변수로 들어왔는지 대기
  const title: string | null = data.get('title') as unknown as string
  const desc: string | null = data.get('description') as unknown as string
  const image: File = data.get('image') as unknown as File //이미지 데이터

  const pdf: File | null = data.get('pdf') as unknown as File | null //이미지 데이터
  //get이라는 함수를 사용하는 상황에서, 가져오는 객체의 타입이 불분명함, File, null, string 등등.
  let signedPDFUrl = null
  let signedImgUrl = null
  try {
    if (pdf) {
      const pdfParams = {
        name: 'client/' + Math.random().toString(36).substring(0, 8) + image.name,
        type: image.type,
      }
      signedPDFUrl = await getSignedFileUrl(pdfParams)
      const uploadPDF = await fetch(signedPDFUrl, {
        method: 'PUT',
        body: pdf,
        headers: {
          'Content-type': pdf.type,
          'Content-Disposition': 'inline',
        },
      })
      if (uploadPDF.status != 200) return NextResponse.json({ success: false, message: 'uploadPDF failed' })
    }

    const imgParams = {
      name: 'client/' + Math.random().toString(36).substring(0, 8) + image.name,
      type: image.type,
    }
    signedImgUrl = await getSignedFileUrl(imgParams)
    const uploadImg = await fetch(signedImgUrl, {
      method: 'PUT',
      body: image,
      headers: {
        'Content-type': image.type,
      },
    })
    if (uploadImg.status != 200) return NextResponse.json({ success: false, message: 'uploadImage failed' })

    connectToDb()
    if (!pdf) {
      //뉴스 추가
      const [newId, order] = await Promise.all([getId('news'), Order.findOne({ id: 0 })])
      let newOrder = order.postOrder
      newOrder.push(newId) //order 배열 끝에 방금 생성한 id값 push
      const newPost = new Post({ title, img: signedImgUrl.split('?')[0], desc, postId: newId })

      await Promise.all([newPost.save(), Order.updateOne({ id: 0 }, { postOrder: newOrder })])

      console.log('News saved to db\nNewsOrder:', newOrder)
    } else {
      //카탈로그 추가
      const [newId, order] = await Promise.all([getId('catelogs'), Order.findOne({ id: 0 })])
      let newOrder = order.catelogOrder
      newOrder.push(newId) //order 배열 끝에 방금 생성한 id값 push
      const newCatelog = new Catelog({
        title,
        img: signedImgUrl.split('?')[0],
        pdf: signedPDFUrl?.split('?')[0],
        desc,
        postId: newId,
      })
      await Promise.all([newCatelog.save(), Order.updateOne({ id: 0 }, { catelogOrder: newOrder })])
      console.log('Catalog saved to db\nCatelogOrder:', newOrder)
    }
    // revalidatePath('/admin')
    // revalidatePath('/api/admin')
    return NextResponse.json({ success: true })
  } catch (e) {
    return NextResponse.json({ success: false, message: e })
  }
}
