import BatteryPostForm from '@/components/admin/BatteryPostForm'
import OthersBatteryPostForm from '@/components/admin/OthersBatteryPostForm'
import { fetchPageData } from '@/lib/action'

const AddBatteryCategoryPage = async ({ params }: any) => {
  const { slug } = params
  const data = await fetchPageData(parseInt(slug[0]), 'hydrogen')
  const formattedData = data.data.filter((item: any) => item.id == slug[1])[0]
  return (
    <div className="flex flex-col flex-1 pb-8 bg-gray-100 min-h-screen">
      {slug[0] === '6' ? (
        <OthersBatteryPostForm
          prevData={slug[1] && data.data.filter((item: any) => item.id == 0)[0]}
          type={'hydrogen'}
        />
      ) : (
        <BatteryPostForm prevData={slug[1] && formattedData} pageId={slug} type={'hydrogen'} />
      )}
    </div>
  )
}

export default AddBatteryCategoryPage
