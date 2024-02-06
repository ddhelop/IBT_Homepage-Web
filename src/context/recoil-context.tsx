'use client'

import { RecoilRoot, atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const isKoreanState = atom({
  key: 'isKorean',
  default: true,
  effects: [persistAtom],
})

export const loggedInState = atom({
  key: 'loggedIn',
  default: false,
  effects: [persistAtom],
})

export default function RecoilContextProvider({ children }: { children: React.ReactNode }) {
  return <RecoilRoot>{children}</RecoilRoot>
}
