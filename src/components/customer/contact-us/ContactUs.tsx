'use client'
import { sendEmail } from '@/lib/action'
import { useRef, useState } from 'react'
import Button from './Button'

export default function ContactUs() {
  // 상태를 사용하여 입력된 텍스트의 길이를 추적합니다.
  const ref = useRef<HTMLFormElement>(null)
  const [desc, setDesc] = useState('')
  const onClearText = () => {
    // 사용자에게 경고창을 띄우고, "예"를 선택한 경우에만 텍스트를 지웁니다.
  }
  const products = ['제품문의', '견적문의', 'asdf', 'asdf', 'asdf', 'asdf']
  return (
    <>
      {/* Wrapper */}
      <div className="w-full flex flex-col items-center mb-56">
        {/* Title Div */}
        <div className="py-44">
          <h1 className="text-6xl font-medium text-[#79AD4B]">Contact Us</h1>
        </div>

        {/* Contents */}
        <div className="w-full flex flex-col items-center">
          <h2 className="text-7xl font-semibold">How Can We help</h2>
          <p className="text-center text-xl font-light py-6">Our Power, Your Business</p>

          <form
            ref={ref}
            action={async (formData) => {
              ref.current?.reset()
              const { error } = await sendEmail(formData)
              if (error) alert(error)
            }}
            className="w-[min(92%,72rem)] flex flex-col pt-20"
          >
            {/* Input Form */}
            {/* 분류 */}
            <div className="w-full flex flex-row border-b border-gray-[#cdcdcd] border-t-2 border-t-black">
              <div className="w-[20%] h-12 flex justify-center items-center bg-[#fafafa]">
                <p className="text-sm">분류</p>
              </div>
              <div className="w-[80%] h-12 flex items-center px-5">
                <select value="none" name="category" className="h-8 border border-[#cdcdcd] bg-[#f6f6f6] rounded">
                  <option value="option1" disabled selected>
                    선택해주세요
                  </option>
                  {products.map((item, id) => (
                    <option key={id} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {/* 이름 */}
            <div className="w-full flex flex-row border-b border-gray-[#cdcdcd]">
              <div className="w-[20%] h-12 flex justify-center items-center bg-[#fafafa]">
                <p className="text-sm">이름</p>
              </div>
              <div className="w-[80%] h-12 flex items-center px-5">
                <input
                  type="text"
                  name="name"
                  className="w-full h-8 border-[1.5px] border-[#cdcdcd] rounded bg-[#fafafa] text-sm px-2"
                />
              </div>
            </div>
            {/* 이메일 */}
            <div className="w-full flex flex-row border-b border-gray-[#cdcdcd]">
              <div className="w-[20%] h-12 flex justify-center items-center bg-[#fafafa]">
                <p className="text-sm">이메일</p>
              </div>
              <div className="w-[80%] h-12 flex items-center px-5">
                <input
                  type="email"
                  name="email"
                  className="w-full h-8 border-[1.5px] border-[#cdcdcd] rounded bg-[#fafafa] text-sm px-2"
                />
              </div>
            </div>
            {/* 연락처 */}
            <div className="w-full flex flex-row border-b border-gray-[#cdcdcd]">
              <div className="w-[20%] h-12 flex justify-center items-center bg-[#fafafa]">
                <p className="text-sm">연락처</p>
              </div>
              <div className="w-[80%] h-12 flex items-center px-5">
                <input
                  type="number"
                  name="number0"
                  className="w-16 h-8 border-[1.5px] border-[#cdcdcd] rounded bg-[#fafafa] text-sm px-2"
                />
                <p className="px-1">-</p>
                <input
                  type="number"
                  name="number1"
                  className="w-16 h-8 border-[1.5px] border-[#cdcdcd] rounded bg-[#fafafa] text-sm px-2"
                />
                <p className="px-1">-</p>
                <input
                  type="number"
                  name="number2"
                  className="w-16 h-8 border-[1.5px] border-[#cdcdcd] rounded bg-[#fafafa] text-sm px-2"
                />
              </div>
            </div>
            {/* 제목 */}
            <div className="w-full flex flex-row border-b border-gray-[#cdcdcd]">
              <div className="w-[20%] h-12 flex justify-center items-center bg-[#fafafa]">
                <p className="text-sm">제목</p>
              </div>
              <div className="w-[80%] h-12 flex items-center px-5">
                <input
                  type="text"
                  name="title"
                  className="w-full h-8 border-[1.5px] border-[#cdcdcd] rounded bg-[#fafafa] text-sm px-2"
                />
              </div>
            </div>
            {/* 내용 */}
            <div className="w-full flex flex-row border-b border-gray-[#cdcdcd] relative">
              <div className="w-[20%] h-60 flex justify-center items-center bg-[#fafafa]">
                <p className="text-sm">내용</p>
              </div>
              <div className="w-[80%] h-60 flex items-center px-5">
                <textarea
                  value={desc}
                  name="desc"
                  onChange={(e) => setDesc(e.target.value)}
                  maxLength={500}
                  className="p-2 resize-none w-full h-56 border-[1.5px] border-[#cdcdcd] rounded bg-[#fafafa] text-sm px-2"
                />
                <div className="absolute bottom-3 right-9 font-semibold text-base text-[#8d8d8d]">
                  {desc.length} / 500자
                </div>
              </div>
            </div>

            {/* 버튼 */}
            {/* <div className="flex flex-row items-center py-10 space-x-2"> */}
            <Button />
          </form>
          <button onClick={onClearText} className="w-32 h-8 border border-black rounded">
            지우기
          </button>
        </div>
      </div>
    </>
  )
}
