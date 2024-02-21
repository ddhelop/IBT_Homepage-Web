import ESG500Component from '@/components/ESG500/ESG500Component'

export const metadata = {
  title: 'ESG_500',
  description: 'IBT ESG_500, 지우장학회, 중앙장형태 장학재단',
}

// const getData = async () => {
//   const res = await fetch(`${process.env.URL}/api/admin/esg-pdf`, {
//     method: 'GET',
//     cache: 'no-store',
//   })
//   if (!res.ok) {
//     throw new Error('Something went wrong')
//   }
//   return res.json()
// }

const ESG500Page = async () => {
  // const data = await getData()
  // console.log(data)
  return <ESG500Component />
}
export default ESG500Page
