import { NewsData } from '@/lib/types'
import IntroSlider from './IntroSlider'
import { NewsProps } from '@/lib/types'

const IntroComponent7 = (props: NewsData) => {
  return (
    <>
      <div className="flex flex-col md:min-h-screen bg-no-repeat bg-cover bg-white ">
        <div className="w-full h-full flex flex-col text-center align-middle justify-center">
          {/* top container */}
          <div className="min-h-[300px] flex flex-col justify-center align-middle">
            <p className="font-medium lg:font-light text-xl lg:text-sm  tracking-[0.2px]">Dynamic Growth</p>
            <h2 className="font-bold text-6xl lg:text-4xl mt-2">News</h2>
            <p className="font-light text-4xl lg:text-2xl mt-6">IBT Road</p>
          </div>
          {/* below container */}
          <div className="min-h-[350px] flex align-middle items-center pt-36">
            <IntroSlider data={props.data} />
          </div>
        </div>
      </div>
    </>
  )
}

export default IntroComponent7
