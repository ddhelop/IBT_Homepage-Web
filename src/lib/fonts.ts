import { Noto_Sans_KR } from 'next/font/google' // Roboto와 한글 NotoSans를 사용합니다.

export const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'], // 또는 preload: false
  weight: ['100', '400', '700', '900'], // 가변 폰트가 아닌 경우, 사용할 fontWeight 배열
})

export const cls = (...classnames: string[]) => {
  return classnames.join(' ')
}
