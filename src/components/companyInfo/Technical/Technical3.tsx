import { researchData } from '@/lib/data'
import React from 'react'

export default function Technical3() {
  return (
    <>
      <div className="w-full mt-9 flex justify-center">
        <div className="w-[95%] lg:w-3/5">
          <table className="w-full">
            <thead className="l bg-green-600">
              <tr className="">
                <th scope="col" className="w-[100px] text-xl font-semibold text-white py-4">
                  개발완료
                </th>
                <th scope="col" className="w-[310px] text-xl font-semibold text-white">
                  개발 제품명
                </th>
                <th scope="col" className="w-[400px] text-xl font-semibold text-white">
                  개발내용
                </th>
                <th scope="col" className="w-[240px] text-xl font-semibold text-white">
                  납품처
                </th>
                <th scope="col" className="w-[150px] text-xl font-semibold text-white">
                  비고
                </th>
              </tr>
            </thead>

            <tbody className=" text-[#6f6f6f]">
              {researchData.map((el, index) => (
                <tr className={`text-center bg-[${el.color}]`} key={index}>
                  <td className="py-4 text-xl font-normal border-2 border-[#e2e2e2]">{el.complete} </td>
                  <td className="text-xl font-normal border-2 border-[#e2e2e2]">{el.productName}</td>
                  <td className="text-xl font-normal border-2 border-[#e2e2e2]">{el.contents}</td>
                  <td className="text-xl font-normal border-2 border-[#e2e2e2]">{el.deliveryDestination}</td>
                  <td className="text-xl font-normal border-2 border-[#e2e2e2]">{el.etc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
