import BatteryEditList from '@/components/admin/BatteryEditList'
import OthersCard from '@/components/admin/OtherBatteryCard'
import { HydrogenPage } from '@/lib/models'

const getData = async () => {
  const res = await fetch(`${process.env.URL}/api/admin/hydrogens`, {
    method: 'GET',
    cache: 'no-store',
  })
  if (!res.ok) {
    throw new Error('Something went wrong')
  }
  return res.json()
}
const HydrogensPage = async () => {
  const res = await getData()
  return (
    <div className="flex flex-col flex-1 min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold bg-white p-8">수소 상세페이지</h1>
      <div className="flex p-8 flex-wrap gap-4 items-start">
        <BatteryEditList datas={res[0]} pageId={0} type={'hydrogen'} />
        <BatteryEditList datas={res[1]} pageId={1} type={'hydrogen'} />
        <BatteryEditList datas={res[2]} pageId={2} type={'hydrogen'} />
        <BatteryEditList datas={res[3]} pageId={3} type={'hydrogen'} />
        <BatteryEditList datas={res[4]} pageId={4} type={'hydrogen'} />
        <BatteryEditList datas={res[5]} pageId={5} type={'hydrogen'} />
        <OthersCard data={res[6].data[0].products} type={'hydrogen'} />
      </div>
    </div>
  )
}

export default HydrogensPage
