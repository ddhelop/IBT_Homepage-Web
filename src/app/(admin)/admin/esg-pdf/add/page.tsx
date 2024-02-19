import ESGPdfPostForm from '@/components/admin/ESGPdfPostForm'
import { Counter, Order } from '@/lib/models'
import { connectToDb } from '@/lib/utils'

const AddNewsPage = async () => {
  return (
    <div className="flex flex-col flex-1 h-screen bg-gray-100">
      <ESGPdfPostForm />
    </div>
  )
}

export default AddNewsPage
