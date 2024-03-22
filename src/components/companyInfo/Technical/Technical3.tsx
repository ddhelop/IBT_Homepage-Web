import { isEnglishState } from '@/context/recoil-context'
import { CompanyInfoData, researchData } from '@/lib/data'
import React from 'react'
import { useRecoilValue } from 'recoil'

export default function Technical3() {
  const isEnglish = useRecoilValue(isEnglishState)
  return (
    <>
      <div className="w-full mt-9 flex justify-center">
        <div className="w-[95%] lg:w-3/5">
          <table className="w-full">
            <thead className="l bg-[#58b646]">
              <tr className="">
                <th scope="col" className="w-[100px] text-sm font-semibold text-white py-3">
                  {CompanyInfoData?.[7].column1?.[isEnglish]}
                </th>
                <th scope="col" className="w-[310px] text-sm font-semibold text-white">
                  {CompanyInfoData?.[7].column2?.[isEnglish]}
                </th>
                <th scope="col" className="w-[400px] text-sm font-semibold text-white">
                  {CompanyInfoData?.[7].column3?.[isEnglish]}
                </th>
                <th scope="col" className="w-[240px] text-sm font-semibold text-white">
                  {CompanyInfoData?.[7].column4?.[isEnglish]}
                </th>
                <th scope="col" className="w-[150px] text-sm font-semibold text-white">
                  {CompanyInfoData?.[7].column5?.[isEnglish]}
                </th>
              </tr>
            </thead>

            <tbody className=" text-black">
              {researchData.map((el, index) => (
                <tr className={`text-center bg-[${el.color}]`} key={index}>
                  <td className="py-4 px-3 text-sm font-normal border-2 border-[#e2e2e2]">
                    {el.complete?.[isEnglish]}{' '}
                  </td>
                  <td className="text-sm font-normal border-2 border-[#e2e2e2]">{el.productName?.[isEnglish]}</td>
                  <td className="text-sm font-normal border-2 border-[#e2e2e2]">{el.contents?.[isEnglish]}</td>
                  <td className="text-sm font-normal border-2 border-[#e2e2e2]">
                    {el.deliveryDestination?.[isEnglish]}
                  </td>
                  <td className="text-sm font-normal border-2 border-[#e2e2e2]">{el.etc?.[isEnglish]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
