import ESG500Component from '@/components/ESG500/ESG500Component'
import { fetchPostData } from '@/lib/action'

export const metadata = {
  title: 'ESG_500',
  description: 'IBT ESG_500, 지우장학회, 중앙장형태 장학재단',
}

const ESG500Page = async () => {
  const res = await fetchPostData(2) //데이터 불러오는 딜레이가 아님
  return (
    <div className="flex justify-center">
      <div className="w-[min(96%,1920px)]">
        <ESG500Component data={res.data} />
      </div>
    </div>
  )
}

export default ESG500Page
