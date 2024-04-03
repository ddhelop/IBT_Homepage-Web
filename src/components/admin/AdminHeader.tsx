'use client'

import { RiNewspaperFill } from 'react-icons/ri'
import { GrCatalogOption } from 'react-icons/gr'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { links_admin } from '@/lib/data'
import { FaFilePdf, FaPager } from 'react-icons/fa6'
import { DiGoogleAnalytics } from 'react-icons/di'
import { IoSettingsSharp } from 'react-icons/io5'

const AdminHeader = () => {
  const pathname = usePathname()

  return (
    <div className="flex flex-col justify-between bg-[#012626] z-50 p-8 w-64 h-screen fixed">
      <h1 className="text-2xl font-bold mb-12 text-gray-100/80">Admin</h1>
      <ul className="text-lg flex flex-col flex-1">
        <Link
          prefetch
          className={`flex items-center py-4 ${pathname === links_admin[0].path ? 'text-white' : 'text-gray-100/60'} `}
          href={links_admin[0].path}
        >
          <FaPager width={32} height={32} />

          <h1 className="ml-4 font-regular">{links_admin[0].name}</h1>
        </Link>
        <Link
          prefetch
          className={`flex items-center py-4 ${pathname === links_admin[1].path ? 'text-white' : 'text-gray-100/60'} `}
          href={links_admin[1].path}
        >
          <FaPager width={32} height={32} />
          <h1 className="ml-4 font-regular">{links_admin[1].name}</h1>
        </Link>
        <Link
          prefetch
          className={`flex items-center py-4 ${pathname === links_admin[2].path ? 'text-white' : 'text-gray-100/60'} `}
          href={links_admin[2].path}
        >
          <RiNewspaperFill width={32} height={32} />
          <h1 className="ml-4 font-regular">{links_admin[2].name}</h1>
        </Link>
        <Link
          prefetch
          className={`flex items-center py-4 ${pathname === links_admin[3].path ? 'text-white' : 'text-gray-100/60'} `}
          href={links_admin[3].path}
        >
          <GrCatalogOption width={32} height={32} />
          <h1 className="ml-4 font-regular">{links_admin[3].name}</h1>
        </Link>
        <Link
          prefetch
          className={`flex items-center py-4 ${pathname === links_admin[4].path ? 'text-white' : 'text-gray-100/60'} `}
          href={links_admin[4].path}
        >
          <FaFilePdf width={32} height={32} />
          <h1 className="ml-4 font-regular">{links_admin[4].name}</h1>
        </Link>
        <Link
          target="_blank"
          className={`flex items-center py-4 text-gray-100/60 `}
          href={'https://vercel.com/ibts-projects/ibt-homepage-wp6z/analytics'}
        >
          <DiGoogleAnalytics width={32} height={32} />
          <h1 className="ml-4 font-regular">{'Vercel Analytics'}</h1>
        </Link>
      </ul>
      <Link
        className={`flex items-center py-4 ${pathname === links_admin[3].path ? 'text-white' : 'text-gray-100/60'} `}
        href={`/admin/change`}
      >
        <IoSettingsSharp size={32} />
      </Link>
    </div>
  )
}

export default AdminHeader
