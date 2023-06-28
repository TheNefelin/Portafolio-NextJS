import './globals.css'
import { Roboto } from 'next/font/google'

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
      </body>
    </html>
  )
}
