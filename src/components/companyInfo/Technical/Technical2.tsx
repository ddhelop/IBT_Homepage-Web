import { intellectualData } from '@/lib/data'
import React from 'react'

export default function Technical2() {
  return (
    <>
      <div className="w-full mt-9 flex justify-center">
        <div className="w-[95%] lg:w-3/5">
          <table className="w-full">
            <thead className="l bg-green-600">
              <tr className="">
                <th scope="col" className="w-[10.6rem] text-base font-semibold text-white py-4">
                  구분
                </th>
                <th scope="col" className="w-[21.3rem] text-base font-semibold text-white">
                  발명의 명칭
                </th>
                <th scope="col" className="w-[10.6rem] text-base font-semibold text-white">
                  출원일
                </th>
                <th scope="col" className="w-[10.6rem] text-base font-semibold text-white">
                  출원번호
                </th>
                <th scope="col" className="w-[10.6rem] text-base font-semibold text-white">
                  등록일
                </th>
                <th scope="col" className="w-[10.6rem] text-base font-semibold text-white">
                  특허번호
                </th>
              </tr>
            </thead>

            <tbody className="text-[#6f6f6f]">
              {intellectualData.map((el, index) => (
                <tr className={`text-center bg-[${el.color}]`} key={index}>
                  {el.rowSpan ? (
                    <td className="text-base font-normal border-2 border-[#e2e2e2]" rowSpan={el.rowSpan}>
                      {el.check}
                    </td>
                  ) : null}
                  <td className="py-2 px-3 text-base font-normal border-2 border-[#e2e2e2]">{el.name}</td>
                  {el.totalRowSpan ? (
                    <td className="text-base font-normal border-2 border-[#e2e2e2]" rowSpan={el.totalRowSpan}>
                      {el.applicant}
                    </td>
                  ) : null}
                  <td className="text-base font-normal border-2 border-[#e2e2e2]">{el.applicationNumber}</td>

                  <td className="text-base font-normal border-2 border-[#e2e2e2]">{el.registrationDate}</td>

                  <td className="text-base font-normal border-2 border-[#e2e2e2]">{el.patentNumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
