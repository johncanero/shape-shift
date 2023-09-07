'use client'

import Navbar from "@/components/Navbar"
import Header from "./components/Header"
import Main from "./components/Main"

export default function Home({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <Header />
      <Main />
    </>
  )
}
