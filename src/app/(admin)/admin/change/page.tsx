import ChangeAccount from '@/components/admin/ChangeAccount'

const ChangePage = async () => {
  return (
    <div className="flex flex-col flex-1 h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4 bg-white p-8">관리자 비밀번호 변경</h1>
      <ChangeAccount />
    </div>
  )
}

export default ChangePage
