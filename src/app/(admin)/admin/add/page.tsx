import PostForm from '@/components/admin/PostForm'

const AddNewsPage = async () => {
  return (
    <div className="flex flex-col flex-1 h-screen bg-gray-100">
      <PostForm postType="news" />
    </div>
  )
}

export default AddNewsPage
