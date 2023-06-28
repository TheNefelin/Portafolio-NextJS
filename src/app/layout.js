import './globals.css'
import { Roboto } from 'next/font/google'

import MyLinks from "@/components/myLinks"

const fuente = Roboto({
  weight: '400',
  subsets: ['latin']
})

export const metadata = {
  title: 'Francisco Dev',
  description: 'Next 13.4.7',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fuente.className}>
        {children}
        <MyLinks />
      </body>
    </html>
  )
}
