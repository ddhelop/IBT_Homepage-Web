import BatteryPostForm from '@/components/admin/BatteryPostForm'

const AddBatteryCategoryPage = async () => {
  return (
    <div className="flex flex-col flex-1 pb-8 bg-gray-100">
      <BatteryPostForm batteryId={0} />
    </div>
  )
}

export default AddBatteryCategoryPage
