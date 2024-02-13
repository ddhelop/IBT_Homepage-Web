const getNewsData = async () => {
  const res = await fetch(`${process.env.URL}/api/admin/news`, {
    cache: 'no-store',
    method: 'GET',
  })
  if (!res.ok) {
    throw new Error('Something went wrong')
  }
  return res.json()
}

const AdminPage = async () => {
  const posts = await getNewsData()
  return <div className="flex w-full h-screen bg-gray-200"></div>
}

export default AdminPage
