import ESG500Component from '@/components/ESG500/ESG500Component'

export const metadata = {
  title: 'ESG_500',
  description: 'IBT ESG_500, 지우장학회, 중앙장형태 장학재단',
}

export default function ESG500Page() {
  return (
    <div className="flex justify-center">
      <div className="w-[min(96%,1200px)]">
        <ESG500Component />
      </div>
    </div>
  )
}
