import IntroComponent from '@/components/intro/IntroComponent'

export const metadata = {
  title: 'IBT intro',
  description: 'IBT intro 인트로',
}

export default function IntroPage(): JSX.Element {
  return (
    <div className="flex flex-col w-full">
      <IntroComponent />
    </div>
  )
}
