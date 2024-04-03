import BatteryEditList from '@/components/admin/BatteryEditList'
import OthersCard from '@/components/admin/OtherBatteryCard'

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
        <BatteryEditList datas={res[0]} pageId={0} type={'battery'} />
        <BatteryEditList datas={res[1]} pageId={1} type={'battery'} />
        <BatteryEditList datas={res[2]} pageId={2} type={'battery'} />
        <BatteryEditList datas={res[3]} pageId={3} type={'battery'} />
        <OthersCard data={res[4].data[0].products} type={'battery'} />
      </div>
    </div>
  )
}

export default AdminPage
