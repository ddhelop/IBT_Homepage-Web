import PostEditList from '@/components/admin/PostEditList'
import { fetchPostData } from '@/lib/action'

const AdminPage = async () => {
  const res = await fetchPostData(2) //데이터 불러오는 딜레이가 아님
  return (
    <div className="flex flex-col flex-1 pb-24 min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4 bg-white p-8">지우장학회 활용실적명세파일</h1>
      <PostEditList datas={res.data} postTypeID={2} />
    </div>
  )
}

export default AdminPage
