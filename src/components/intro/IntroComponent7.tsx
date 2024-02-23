import IntroSlider from './IntroSlider'

const getData = async () => {
  const res = await fetch(`${process.env.URL}/api/admin/news`, {
    method: 'GET',
    cache: 'no-store',
  })
  if (!res.ok) {
    throw new Error('Something went wrong')
  }
  return res.json()
}

const IntroComponent7 = async () => {
  const data = await getData()

  return (
    <>
      <div className="flex flex-col min-h-screen bg-no-repeat bg-cover bg-white ">
        <div className="w-full h-full flex flex-col text-center align-middle justify-center">
          {/* top container */}
          <div className="min-h-[300px] flex flex-col justify-center align-middle">
            <p className="font-medium lg:font-light text-xl lg:text-sm  tracking-[0.2px]">Dynamic Growth</p>
            <h2 className="font-bold text-6xl lg:text-4xl mt-2">News</h2>
            <p className="font-light text-4xl lg:text-2xl mt-6">IBT Road</p>
          </div>

          {/* below container */}
          <div className="min-h-[350px] flex align-middle items-center pt-48">{/* <IntroSlider data={data} /> */}</div>
          {/* <SlickSlider /> */}
        </div>
      </div>
    </>
  )
}

export default IntroComponent7
