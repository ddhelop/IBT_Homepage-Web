'use client'
import { ChangeEvent, useState } from 'react'

export default function ContactUs() {
  // 상태를 사용하여 입력된 텍스트의 길이를 추적합니다.
  const [category, setCategory] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [contact, setContact] = useState(['', '', '']) // 연락처를 배열로 관리
  const [title, setTitle] = useState('')
  const [message, setMessage] = useState('')

  // 각 입력 필드의 변경을 처리하는 핸들러들
  const onChangeCategory = (event: ChangeEvent<HTMLSelectElement>) => setCategory(event.target.value)
  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => setName(event.target.value)
  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)
  const onChangeContact = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
    const newContacts = [...contact]
    newContacts[index] = event.target.value
    setContact(newContacts)
  }
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)
  const onChangeMessage = (event: ChangeEvent<HTMLTextAreaElement>) => setMessage(event.target.value)

  const onClearText = () => {
    // 사용자에게 경고창을 띄우고, "예"를 선택한 경우에만 텍스트를 지웁니다.
    const isConfirmed = window.confirm('모든 입력 내용을 지우시겠습니까?')
    if (isConfirmed) {
      setCategory('')
      setName('')
      setEmail('')
      setContact(['', '', ''])
      setTitle('')
      setMessage('')
    }
  }

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

          {/* Input Form */}
          <div className="w-[95%] lg:w-[50%] flex flex-col pt-20">
            {/* 분류 */}
            <div className="w-full flex flex-row border-b border-gray-[#cdcdcd] border-t-2 border-t-black">
              <div className="w-[20%] h-12 flex justify-center items-center bg-[#fafafa]">
                <p className="text-sm">분류</p>
              </div>
              <div className="w-[80%] h-12 flex items-center px-5">
                <select value={category} className="h-8 border border-[#cdcdcd] bg-[#f6f6f6] rounded">
                  <option value="option1" disabled selected>
                    선택해주세요
                  </option>
                  <option value="option2">제품문의</option>
                  <option value="option3">견적문의</option>
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
                  value={name}
                  onChange={onChangeName}
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
                  value={email}
                  onChange={onChangeEmail}
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
                  onChange={onChangeContact(0)}
                  value={contact[0]}
                  className="w-16 h-8 border-[1.5px] border-[#cdcdcd] rounded bg-[#fafafa] text-sm px-2"
                />
                <p className="px-1">-</p>
                <input
                  onChange={onChangeContact(1)}
                  type="number"
                  value={contact[1]}
                  className="w-16 h-8 border-[1.5px] border-[#cdcdcd] rounded bg-[#fafafa] text-sm px-2"
                />
                <p className="px-1">-</p>
                <input
                  type="number"
                  value={contact[2]}
                  onChange={onChangeContact(2)}
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
                  value={title}
                  onChange={onChangeTitle}
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
                  value={message}
                  onChange={onChangeMessage}
                  maxLength={500}
                  className="p-2 resize-none w-full h-56 border-[1.5px] border-[#cdcdcd] rounded bg-[#fafafa] text-sm px-2"
                />
                <div className="absolute bottom-3 right-9 font-semibold text-base text-[#8d8d8d]">
                  {message.length} / 500자
                </div>
              </div>
            </div>
          </div>
          {/* 버튼 */}
          <div className="flex flex-row items-center py-10 space-x-2">
            <button className="w-32 h-8 bg-[#069729] text-white rounded">작성완료</button>
            <button onClick={onClearText} className="w-32 h-8 border border-black rounded">
              지우기
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
