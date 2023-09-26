import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ShapeShift: Your BMI Companion',
  description: 'Your BMI Companion',
  icons: {
    icon: '/images/shapeShift/shapeShiftIcon.png',
    shortcut: '/images/shapeShift/shapeShiftIcon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='h-screen'>
        <body
          className={`${inter.className} max-w-6xl p-6 mx-auto bg-gradient-to-r from-white to-emerald-200 rounded-ee-3xl flex-grow`}
        >
          {children}
        </body>
    </html>
  )
}
