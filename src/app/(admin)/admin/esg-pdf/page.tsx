import PostEditList from '@/components/admin/PostEditList'
import { postData_admin } from '@/lib/data'

const getData = async () => {
  const res = await fetch(`${process.env.URL}/api/admin/esg-pdf`, {
    method: 'GET',
    cache: 'no-store',
  })
  if (!res.ok) {
    throw new Error('Something went wrong')
  }
  return res.json()
}
const AdminPage = async () => {
  let pdfs = await getData()
  return (
    <div className="flex flex-col flex-1 h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4 bg-white p-8">지우장학회 활용실적명세파일</h1>
      <PostEditList datas={pdfs} postTypeID={2} />
    </div>
  )
}

export default AdminPage
