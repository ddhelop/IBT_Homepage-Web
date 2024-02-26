'use client'

import { RecoilRoot, atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const isEnglishState = atom({
  key: 'isEnglish',
  default: +0,
  effects: [persistAtom],
})

export default function RecoilContextProvider({ children }: { children: React.ReactNode }) {
  return <RecoilRoot>{children}</RecoilRoot>
}
