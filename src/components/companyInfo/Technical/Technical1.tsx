import { isEnglishState } from '@/context/recoil-context'
import { CompanyInfoData, TableData1 } from '@/lib/data'
import React from 'react'
import { useRecoilValue } from 'recoil'

export default function Technical1() {
  const isEnglish = useRecoilValue(isEnglishState)
  return (
    <>
      <div className="w-full mt-9 flex justify-center">
        <div className="w-[95%] lg:w-1/2">
          <table className="w-full">
            <thead className="bg-[#58b646]">
              <tr className="">
                <th scope="col" className="w-[33%] text-sm font-semibold text-white py-3">
                  {CompanyInfoData?.[5].column1?.[isEnglish]}
                </th>
                <th scope="col" className="w-[33%] text-sm font-semibold text-white">
                  {CompanyInfoData?.[5].column2?.[isEnglish]}
                </th>
                <th scope="col" className="w-[14%] text-sm font-semibold text-white">
                  {CompanyInfoData?.[5].column3?.[isEnglish]}
                </th>
                <th scope="col" className="w-[20%] text-sm font-semibold text-white">
                  {CompanyInfoData?.[5].column4?.[isEnglish]}
                </th>
              </tr>
            </thead>
            <tbody className=" text-[#6f6f6f]">
              {TableData1.map((el, index) => (
                <tr className={`text-center bg-[${el.color[isEnglish]}]`} key={index}>
                  <td className="py-3 text-sm font-normal border-2 border-[#e2e2e2]">{el.authorization[isEnglish]} </td>
                  <td className="text-sm font-normal border-2 border-[#e2e2e2]">{el.authorization[isEnglish]}</td>
                  <td className="text-sm font-normal border-2 border-[#e2e2e2]">{el.date[isEnglish]}</td>
                  <td className="text-sm font-normal border-2 border-[#e2e2e2]">{el.note[isEnglish]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
