import { IPageNation } from '@/lib/types'

export default function PaginationComponent(props: IPageNation): JSX.Element {
  const maxPageNumber = 5 // 한 번에 표시할 최대 페이지 번호 개수

  // 전체 페이지 수를 기준으로 마지막 페이지 그룹의 시작 페이지 번호를 계산합니다.
  const totalPageCount = props.totalPageCount
  let startPage = 1

  if (totalPageCount > maxPageNumber) {
    // 현재 페이지가 속한 페이지 그룹의 시작 페이지를 계산합니다.
    const currentPageGroup = Math.ceil(props.currentPage / maxPageNumber)
    startPage = (currentPageGroup - 1) * maxPageNumber + 1
  }

  // 현재 페이지 그룹의 마지막 페이지 번호를 계산합니다. 이는 시작 페이지에서 최대 페이지 수를 더하되, 전체 페이지 수를 넘지 않도록 합니다.
  const endPage = Math.min(startPage + maxPageNumber - 1, totalPageCount)

  return (
    <>
      <div className="flex">
        <div
          className={`w-8 h-8 text-center ${
            props.currentPage <= maxPageNumber ? 'cursor-not-allowed text-gray-400' : 'cursor-pointer'
          }`}
          onClick={() => {
            if (props.currentPage > 1) {
              props.setCurrentPage(1) // 첫 페이지로 이동
            }
          }}
        >
          &lt;&lt;
        </div>
        <div
          className={`w-8 h-8 text-center ${
            props.currentPage <= maxPageNumber ? 'text-gray-400 cursor-not-allowed' : 'cursor-pointer'
          }`}
          onClick={() => {
            const maxPageNumber = 5 // 한 번에 표시할 최대 페이지 번호 개수

            // 현재 페이지 그룹의 시작 페이지 계산
            const currentGroupStartPage = Math.floor((props.currentPage - 1) / maxPageNumber) * maxPageNumber + 1

            if (props.currentPage > 1) {
              // 이전 페이지 그룹의 첫 페이지로 이동
              const previousGroupFirstPage = Math.max(1, currentGroupStartPage - maxPageNumber)
              props.setCurrentPage(previousGroupFirstPage)
            }
          }}
        >
          &lt;
        </div>

        {Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map((pageNumber) => (
          <div
            key={pageNumber}
            onClick={() => props.setCurrentPage(pageNumber)}
            className={`w-8 h-8 text-center cursor-pointer ${
              pageNumber === props.currentPage ? 'font-bold text-[#79ad4b] border-2 border-[#79ad4b] rounded' : ''
            }`}
          >
            {pageNumber}
          </div>
        ))}

        <div
          className={`w-8 h-8 text-center ${
            Math.ceil(props.currentPage / maxPageNumber) * maxPageNumber >= totalPageCount
              ? 'text-gray-400 cursor-not-allowed'
              : 'cursor-pointer'
          }`}
          onClick={() => {
            // 현재 페이지 그룹의 마지막 페이지 계산
            const currentGroupEndPage = Math.ceil(props.currentPage / maxPageNumber) * maxPageNumber
            // 다음 페이지 그룹의 첫 페이지 계산
            const nextPageGroupFirstPage = currentGroupEndPage + 1

            if (props.currentPage < totalPageCount) {
              // 현재 페이지가 전체 페이지 수보다 작을 때,
              // 다음 페이지 그룹의 첫 페이지로 설정합니다. 이 때, 전체 페이지 수를 넘지 않도록 합니다.
              props.setCurrentPage(Math.min(nextPageGroupFirstPage, totalPageCount))
            }
          }}
        >
          &gt;
        </div>
        <div
          className={`w-8 h-8 text-center ${
            Math.ceil(props.currentPage / maxPageNumber) * maxPageNumber >= totalPageCount
              ? 'text-gray-400 cursor-not-allowed'
              : 'cursor-pointer'
          }`}
          onClick={() => {
            if (props.currentPage < totalPageCount) {
              props.setCurrentPage(totalPageCount) // 마지막 페이지로 이동
            }
          }}
        >
          &gt;&gt;
        </div>
      </div>
    </>
  )
}
