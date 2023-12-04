import type { Metadata } from 'next'
import { Red_Hat_Display } from 'next/font/google'
import './globals.css'

const redHatDisplay = Red_Hat_Display({ subsets: ['latin'], weight: ['500', '700', '900'] })

export const metadata: Metadata = {
  title: 'Order summary card',
  description: "A perfect project for newbies who are starting to build confidence with layouts!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={redHatDisplay.className}>{children}</body>
    </html>
  )
}
