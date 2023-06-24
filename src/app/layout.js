import './globals.css'

export const metadata = {
  title: 'Francisco Dev',
  description: 'Next 13.4.7',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
