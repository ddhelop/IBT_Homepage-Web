import BatteryPostForm from '@/components/admin/BatteryPostForm'

const AddBatteryCategoryPage = async ({ params }: any) => {
  const { slug } = params
  return (
    <div className="flex flex-col flex-1 pb-8 bg-gray-100 min-h-screen">
      <BatteryPostForm batteryId={parseInt(slug)} />
    </div>
  )
}

export default AddBatteryCategoryPage
