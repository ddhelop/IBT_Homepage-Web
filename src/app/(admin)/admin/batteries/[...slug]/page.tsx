import BatteryPostForm from '@/components/admin/BatteryPostForm'
import { fetchPageData } from '@/lib/action'

const AddBatteryCategoryPage = async ({ params }: any) => {
  const { slug } = params
  const data = await fetchPageData(parseInt(slug[0]))

  return (
    <div className="flex flex-col flex-1 pb-8 bg-gray-100 min-h-screen">
      <BatteryPostForm prevData={slug[1] && data} batteryId={slug} />
    </div>
  )
}

export default AddBatteryCategoryPage
