import { fetchPageData } from '@/lib/action'

const getData = async () => {
  const res = await fetch(`${process.env.URL}/api/admin/batteries`, {
    method: 'GET',
    cache: 'no-store',
  })
  if (!res.ok) {
    throw new Error('Something went wrong')
  }
  return res.json()
}

const AnalyticsPage = async () => {
  const data = await getData()

  return <div className="flex flex-col flex-1 pb-8 bg-gray-100 min-h-screen"></div>
}

export default AnalyticsPage
