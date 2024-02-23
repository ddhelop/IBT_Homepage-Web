import { useEffect, useState } from 'react'
import IntroSlider from './IntroSlider'
import axios from 'axios'

// const getData = async () => {
//   const res = await fetch(`${process.env.URL}/api/admin/news`, {
//     method: 'GET',
//     cache: 'no-store',
//   })
//   if (!res.ok) {
//     throw new Error('Something went wrong')
//   }
//   return res.json()
// }
export interface ApiResponse {
  isSuccess: boolean
  code: number
  message: string
  result: { img: string; title: string; desc: string }[] // API 응답 형식을 명시
}

const IntroComponent7 = () => {
  const [news, setNews] = useState<{ img: string; title: string; desc: string }[]>([])

  useEffect(() => {
    async function fetchNews(): Promise<void> {
      try {
        const response = await axios.get(`http://localhost:3000/api/admin/news`)
        setNews(response.data)
        console.log(response.data)
      } catch (error) {
        console.error('Error:', error)
      }
    }

    void fetchNews()
  }, []) // 빈 의존성 배열로 마운트 시에만 실행

  return (
    <>
      <div className="flex flex-col md:min-h-screen bg-no-repeat bg-cover bg-white ">
        <div className="w-full h-full flex flex-col text-center align-middle justify-center">
          {/* top container */}
          <div className="min-h-[300px] flex flex-col justify-center align-middle">
            <p className="font-medium lg:font-light text-xl lg:text-sm  tracking-[0.2px]">Dynamic Growth</p>
            <h2 className="font-bold text-6xl lg:text-4xl mt-2">News</h2>
            <p className="font-light text-4xl lg:text-2xl mt-6">IBT Road</p>
          </div>
          {/* below container */}
          <div className="min-h-[350px] flex align-middle items-center pt-36">
            <IntroSlider news={news} />
          </div>
        </div>
      </div>
    </>
  )
}

export default IntroComponent7
