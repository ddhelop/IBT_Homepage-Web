const getData = async () => {
  const res = await fetch('/api/news', { method: 'GET', next: { revalidate: 3600 } })

  if (!res.ok) {
    throw new Error('Something went wrong')
  }

  return res.json()
}

export const Posts = async () => {
  const posts = await getData()
  return (
    <div>
      {/* {posts.map((post: any) => (
        <div key={post._id}>post</div>
      ))} */}
    </div>
  )
}
