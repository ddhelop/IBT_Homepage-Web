import { isEnglishState } from '@/context/recoil-context'
import { CompanyInfoData, intellectualData } from '@/lib/data'
import React from 'react'
import { useRecoilValue } from 'recoil'

export default function Technical2() {
  const isEnglish = useRecoilValue(isEnglishState)

  return (
    <>
      <div className="w-full mt-9 flex justify-center">
        <div className="w-[95%] lg:w-3/5">
          <table className="w-full">
            <thead className="bg-[#59b646]">
              <tr className="">
                <th scope="col" className="w-[10.6rem] text-sm font-semibold text-white py-3">
                  {CompanyInfoData?.[6].column1?.[isEnglish]}
                </th>
                <th scope="col" className="w-[21.3rem] text-sm font-semibold text-white">
                  {CompanyInfoData?.[6].column2?.[isEnglish]}
                </th>
                <th scope="col" className="w-[10.6rem] text-sm font-semibold text-white">
                  {CompanyInfoData?.[6].column3?.[isEnglish]}
                </th>
                <th scope="col" className="w-[10.6rem] text-sm font-semibold text-white">
                  {CompanyInfoData?.[6].column4?.[isEnglish]}
                </th>
                <th scope="col" className="w-[10.6rem] text-sm font-semibold text-white">
                  {CompanyInfoData?.[6].column5?.[isEnglish]}
                </th>
                <th scope="col" className="w-[10.6rem] text-sm font-semibold text-white">
                  {CompanyInfoData?.[6].column6?.[isEnglish]}
                </th>
              </tr>
            </thead>

            <tbody className="text-black">
              {intellectualData.map((el, index) => (
                <tr className={`text-center bg-[${el.color}]`} key={index}>
                  {el.rowSpan ? (
                    <td className="text-sm font-normal border-2 border-[#e2e2e2]" rowSpan={el.rowSpan}>
                      {el.check[isEnglish]}
                    </td>
                  ) : null}
                  <td className="py-2 px-3 text-sm font-normal border-2 border-[#e2e2e2]">{el.name?.[isEnglish]}</td>
                  {el.totalRowSpan ? (
                    <td className="text-sm font-normal border-2 border-[#e2e2e2]" rowSpan={el.totalRowSpan}>
                      {el.applicant[isEnglish]}
                    </td>
                  ) : null}
                  <td className="text-sm font-normal border-2 border-[#e2e2e2]">{el.applicationNumber?.[isEnglish]}</td>

                  <td className="text-sm font-normal border-2 border-[#e2e2e2]">{el.registrationDate?.[isEnglish]}</td>

                  <td className="text-sm font-normal border-2 border-[#e2e2e2]">{el.patentNumber?.[isEnglish]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
