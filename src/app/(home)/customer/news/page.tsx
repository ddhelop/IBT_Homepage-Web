import News from '@/components/customer/ news/News'
import { fetchPostData } from '@/lib/action'

const NewsPage = async () => {
  const res = await fetchPostData(0) //데이터 불러오는 딜레이가 아님
  const posts = res.data

  return (
    <div>
      <News posts={posts} />
    </div>
  )
}

export default NewsPage
