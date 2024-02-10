import PostForm from '@/components/admin/PostForm'

const AdminPage = async () => {
  return (
    <div className="flex w-full h-screen bg-gray-200">
      <PostForm postType="news" />
      <PostForm postType="catelog" />
    </div>
  )
}

export default AdminPage
