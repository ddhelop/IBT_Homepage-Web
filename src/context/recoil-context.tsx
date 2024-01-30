"use client";

import { RecoilRoot, atom } from "recoil";

export const isKoreanState = atom({
  key: "isKorean",
  default: true,
});
export default function RecoilContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
