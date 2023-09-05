'use client'

import Header from "@/components/Header"
import Navbar from "@/components/Navbar"

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <h1 className='text-neutral-900 text-2xl font-semibold text-center mt-12'>
        ShapeShift: Your BMI Companion
      </h1>
    </>
  )
}
