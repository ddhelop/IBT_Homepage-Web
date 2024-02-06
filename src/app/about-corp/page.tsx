import ExampleComponent1 from '@/components/ExampleComponent1'

export const metadata = {
  title: 'About IBT',
  description: 'IBT 소개 페이지',
}

const AboutCorpPage = () => {
  return (
    <div className="flex flex-col w-full">
      <ExampleComponent1 />
    </div>
  )
}
export default AboutCorpPage
