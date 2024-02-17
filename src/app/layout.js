import './globals.css'
import './custom.css'
import { Kanit } from 'next/font/google'

const kanit = Kanit({ 
  subsets: ['latin'],
  style: ['italic','normal'],
  variable: "--font-kanit",
  weight: ['400', '500', '600', '700'],
})


export const metadata = {
  title: 'Ryan Khoshkbarchi',
  description: 'Ryan Khoshkbarchi Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${kanit.variable} bg-slate-950 overflow-x-hidden max-w-full scroll-smooth`}>{children}</body>
    </html>
  )
}
