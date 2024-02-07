import CatelogCard from '@/components/customer/CatelogCard'

import { CatelogProps } from '@/lib/types'

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/admin/catelogs', {
    cache: 'no-store',
    method: 'GET',
  })
  if (!res.ok) {
    throw new Error('Something went wrong')
  }
  return res.json()
}
const CatelogPage = async () => {
  const posts = await getData()

  return (
    <div className="flex flex-col bg-white px-32">
      <h1 className="text-[#79AD4B] text-6xl text-center my-8">CATALOG</h1>
      <div className="flex flex-wrap gap-8 mt-8">
        {posts.map((catelog: CatelogProps) => (
          <CatelogCard key={catelog.catelogId.toString()} {...catelog} />
        ))}
      </div>
    </div>
  )
}

export default CatelogPage
