'use client'

import { RiNewspaperFill } from 'react-icons/ri'
import { FaFilePdf } from 'react-icons/fa6'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

const AdminHeader = ({ params }: any) => {
  const pathname = usePathname()

  return (
    <div className="bg-[#012626]  p-8 w-64 h-screen">
      <h1 className="text-2xl font-bold mb-12 text-gray-100/80">Admin</h1>
      <ul className="text-lg ">
        <Link
          className={`flex items-center py-4 ${pathname === '/admin' ? 'text-white' : 'text-gray-100/60'} `}
          href="/admin"
        >
          <RiNewspaperFill width={32} height={32} />
          <h1 className="ml-4 font-regular">뉴스</h1>
        </Link>
        <Link
          className={`flex items-center py-4 ${pathname === '/admin/catelogs' ? 'text-white' : 'text-gray-100/60'} `}
          href="/admin/catelogs"
        >
          <FaFilePdf width={32} height={32} />
          <h1 className="ml-4 font-regular">카탈로그</h1>
        </Link>
      </ul>
    </div>
  )
}

export default AdminHeader
