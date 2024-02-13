'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function LithiumBox() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: +100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.5,
        }}
        className="inline-flex h-[30rem] lg:mx-40"
      >
        <div className="group relative flex flex-col flex-shrink-0 justify-between lg:w-1/3 w-full lg:bg-battery-back lg:text-black bg-black text-white px-9 py-8">
          <div className="z-10">
            <div className="flex flex-row justify-between items-center">
              <div>
                <div className="lg:text-4xl text-5xl font-bold mb-1.5 lg:mt-0 mt-3">Lithium</div>
                <div className="lg:text-sm text-md font-bold pl-1.5">리튬축전지</div>
              </div>
              <Link href="/battery/batteryDetail/power">
                <motion.button
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="hidden transition-all group-hover:flex rounded-xl w-30 lg:py-0 p-7 h-10 items-center justify-center bg-primary-green"
                >
                  <Image alt="arrow" src={'/image/arrow.svg'} width={30} height={10} />
                </motion.button>
              </Link>
            </div>
            <div className="mt-5">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.3,
                }}
                className="text-2xl font-bold leading-10 pl-1 group-hover:hidden lg:text-base lg:leading-10"
              >
                IBT의 LiFePO4 배터리는
                <br />
                부피가 작고 가볍고 전력효율이 높으며,
                <br />
                충방전 관리가 매우 용이하여
                <br />
                골프카, 지게차, AGV, 선박, 통신, UPS, 특수용 등
                <br />
                다양한 영역의 고객에게 사랑받고 있습니다.
              </motion.p>
              <div className="hidden group-hover:flex flex-col gap-5 pt-10">
                <Link href="/battery/batteryDetail/power">
                  <motion.button
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="w-full hover:bg-gray-300 hover:text-black rounded-2xl"
                  >
                    <div className="flex flex-row justify-between items-center px-10 my-5 lg:text-lg text-2xl font-bold">
                      동력용
                      <Image alt="arrow" src={'/image/arrow_green.svg'} width={30} height={10} />
                    </div>
                  </motion.button>
                </Link>
                <Link href="/battery/batteryDetail/energy-save">
                  <motion.button
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="w-full hover:bg-gray-300 hover:text-black rounded-2xl"
                  >
                    <div className="flex flex-row justify-between items-center px-10 my-5 lg:text-lg text-2xl font-bold">
                      에너지저장용
                      <Image alt="arrow" src={'/image/arrow_green.svg'} width={30} height={10} />
                    </div>
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-end group-hover:hidden">
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.3,
              }}
              className="flex rounded-xl w-30 lg:py-0 p-7 h-10 items-center justify-center bg-primary-green z-10"
            >
              <Image alt="arrow" src={'/image/arrow.svg'} width={30} height={10} />
            </motion.button>
          </div>
          <Image
            alt="Lithium"
            src={'/image/310인트로/312_메인(Lithium).png'}
            fill
            className="lg:hidden z-0 opacity-40"
          />
        </div>
        <div className="lg:relative lg:flex lg:w-2/3 lg:h-full lg:justify-center lg:items-center hidden">
          <Image alt="Lithium" src={'/image/310인트로/312_메인(Lithium).png'} fill />
        </div>
      </motion.div>
    </>
  )
}
