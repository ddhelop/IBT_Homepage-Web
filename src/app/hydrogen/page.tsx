import ExampleComponent1 from '@/components/ExampleComponent1'

export const metadata = {
  title: 'About Hydrogen',
  description: 'IBT 소개 페이지',
}

export default function AboutCorpPage() {
  return (
    <div className="flex flex-col w-full">
      <ExampleComponent1 />
    </div>
  )
}
