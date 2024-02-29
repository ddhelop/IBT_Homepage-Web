import CatelogCard from '@/components/customer/CatelogCard'
import { fetchPostData } from '@/lib/action'

import { CatalogProps } from '@/lib/types'

const CatelogPage = async () => {
  const res = await fetchPostData(1) //데이터 불러오는 딜레이가 아님
  const catalogs = res.data
  return (
    <div className="flex justify-center pt-48">
      <div className="flex flex-col">
        <h1 className="text-[#79AD4B] text-6xl text-center my-8">CATALOG</h1>
        <div className="grid grid-cols-2 lg:grid-cols-3 mt-8 w-[min(92%,1920px)] gap-24">
          {catalogs.length ? (
            catalogs.map((catelog: CatalogProps) => <CatelogCard key={catelog.id.toString()} {...catelog} />)
          ) : (
            <div className="w-full h-96 flex items-center justify-center text-gray-400">
              <h1 className="text-2xl sm:text-lg">게시글이 없어요!</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CatelogPage
