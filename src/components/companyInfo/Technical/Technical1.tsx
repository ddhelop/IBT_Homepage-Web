import { TableData1 } from '@/lib/data'
import React from 'react'

export default function Technical1() {
  return (
    <>
      <div className="w-full mt-9 flex justify-center">
        <div className="w-[95%] lg:w-3/5">
          <table className="w-full">
            <thead className="l bg-green-600">
              <tr className="">
                <th scope="col" className="w-[33%] text-base font-semibold text-white py-4">
                  인허가명
                </th>
                <th scope="col" className="w-[33%] text-base font-semibold text-white">
                  인증기관
                </th>
                <th scope="col" className="w-[14%] text-base font-semibold text-white">
                  최초 인증일
                </th>
                <th scope="col" className="w-[20%] text-base font-semibold text-white">
                  비고
                </th>
              </tr>
            </thead>
            <tbody className=" text-[#6f6f6f]">
              {TableData1.map((el, index) => (
                <tr className={`text-center bg-[${el.color}]`} key={index}>
                  <td className="py-4 text-base font-normal border-2 border-[#e2e2e2]">{el.authorization} </td>
                  <td className="text-base font-normal border-2 border-[#e2e2e2]">{el.authorization}</td>
                  <td className="text-base font-normal border-2 border-[#e2e2e2]">{el.date}</td>
                  <td className="text-base font-normal border-2 border-[#e2e2e2]">{el.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
