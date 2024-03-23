'use client'

import { handleOthersDelete } from '@/lib/action'
import { getErrorMessage } from '@/lib/utils'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const OthersCard = ({ data, type }: { data: any; type: 'battery' | 'hydrogen' }) => {
  const [refresh, setRefresh] = useState(false)
  const emptyData = { id: 0, title: [], itemFile: '', itemTitle: [], itemSubtitle: [], itemAdvanced: [], products: [] }

  const onDeleteSubmit = async () => {
    const isConfirmed = window.confirm(`정말로 해당 항목을 제거하시겠습니까?`)
    if (isConfirmed) {
      try {
        const { success, message } = await handleOthersDelete(emptyData, type)
        if (success) setRefresh(true)
      } catch (e) {
        console.log(getErrorMessage(e))
      }
    }
  }

  return (
    <div className="flex w-[min(90%,480px)] h-32 justify-between bg-white items-center shadow-md border rounded-lg p-4 mb-2">
      <div>
        <h1 className="text-xl font-bold text-center text-gray-600">
          {type === 'battery' ? '배터리' : '수소'} 기타 페이지
        </h1>
        <h1 className="text-md text-gray-700">{data.length}개 존재</h1>
      </div>
      <div>
        {data.length > 0 && (
          <button
            className="p-4 rounded-lg border
       border-[#04BF7B] text-[#04BF7B] mr-4 "
            onClick={onDeleteSubmit}
          >
            데이터 삭제
          </button>
        )}
        <Link
          href={type === 'battery' ? `/admin/batteries/4/edit` : `/admin/hydrogens/6/edit`}
          className="p-4 w-32 rounded-lg transition font-medium bg-[#04BF7B] text-white"
        >
          페이지 수정
        </Link>
      </div>
    </div>
  )
}

export default OthersCard
