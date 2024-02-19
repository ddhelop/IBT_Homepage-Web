import CatelogCard from '@/components/customer/CatelogCard'

import { CatelogProps } from '@/lib/types'

const getData = async () => {
  const res = await fetch(`${process.env.URL}/api/admin/catelogs`, {
    method: 'GET',
    cache: 'no-store',
  })
  if (!res.ok) {
    throw new Error('Something went wrong')
  }
  return res.json()
}

const CatelogPage = async () => {
  const catelogs = await getData()
  return (
    <div className="flex justify-center w-full pt-48 min-h-[64vh] lg:min-h-[80vh]">
      <div className="flex flex-col bg-white sm:w-auto w-[92%]">
        <h1 className="text-[#79AD4B] text-6xl text-center my-8">CATALOG</h1>
        <div className="flex flex-wrap mt-8 w-full">
          {catelogs.length ? (
            catelogs.map((catelog: CatelogProps) => <CatelogCard key={catelog.id.toString()} {...catelog} />)
          ) : (
            <div className="w-full h-64 flex items-center justify-center text-gray-400">
              <h1 className="text-2xl sm:text-lg">게시글이 없어요!</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CatelogPage
