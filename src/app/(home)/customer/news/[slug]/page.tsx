import Image from 'next/image'

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

const SingleNewsPage = async ({ params }: any) => {
  const { slug } = params
  const post = await getData(slug)

  return (
    <div className="flex flex-col items-center gap-16 p-24">
      <div className="flex relative h-96 w-full">
        <Image src={post.img} alt="" fill className="object-contain" />
      </div>
      <h1 className="text-4xl font-bold">{post.title}</h1>
      <span className="font-medium text-gray-400 self-end">{post.createdAt.toString().slice(0, 10)}</span>
      <div className="text-lg w-[min(64%,1280px)] text-centerleading-extra-loose whitespace-pre-line text-balance break-keep">
        {post.desc}
      </div>
    </div>
  )
}

export default SingleNewsPage
