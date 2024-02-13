import CatelogCard from '@/components/customer/CatelogCard'

import { CatelogProps } from '@/lib/types'

const getData = async () => {
  const res = await fetch(`${process.env.URL}/api/admin/catelogs`, {
    method: 'GET',
    next: { revalidate: 60 },
  })
  if (!res.ok) {
    throw new Error('Something went wrong')
  }
  return res.json()
}
const CatelogPage = async () => {
  const catelogs = await getData()
  return (
    <div className="flex flex-col bg-white px-32">
      <h1 className="text-[#79AD4B] text-6xl text-center my-8">CATALOG</h1>
      <div className="flex flex-wrap gap-8 mt-8">
        {catelogs.map((catelog: CatelogProps) => (
          <CatelogCard key={catelog.postId.toString()} {...catelog} />
        ))}
      </div>
    </div>
  )
}

export default CatelogPage
