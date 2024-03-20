import BatteryEditList from '@/components/admin/BatteryEditList'

const getData = async () => {
  const res = await fetch(`${process.env.URL}/api/admin/batteries`, {
    method: 'GET',
    cache: 'no-store',
  })
  if (!res.ok) {
    throw new Error('Something went wrong')
  }
  return res.json()
}
const AdminPage = async () => {
  const res = await getData()
  return (
    <div className="flex flex-col flex-1 min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold bg-white p-8">배터리 상세페이지</h1>
      <div className="flex p-8 flex-wrap gap-4 items-start">
        <BatteryEditList datas={res[0]} batteryId={0} />
        <BatteryEditList datas={res[1]} batteryId={1} />
        <BatteryEditList datas={res[2]} batteryId={2} />
        <BatteryEditList datas={res[3]} batteryId={3} />
      </div>
    </div>
  )
}

export default AdminPage
