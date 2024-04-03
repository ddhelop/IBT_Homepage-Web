import PostForm from '@/components/admin/PostForm'

// FETCH DATA WITH AN API
const getData = async (slug: string) => {
  const res = await fetch(`${process.env.URL}/api/admin/news/${slug}`, {
    cache: 'no-store',
    method: 'GET',
  })
  if (!res.ok) {
    throw new Error('Something went wrong')
  }
  return res.json()
}

const EditNewsPage = async ({ params }: any) => {
  const { slug } = params
  const post = await getData(slug)

  return (
    <div className="flex flex-col flex-1 pb-24 min-h-screen bg-gray-100">
      <PostForm postTypeId={0} prevData={post} />
    </div>
  )
}

export default EditNewsPage
