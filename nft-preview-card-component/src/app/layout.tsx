import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'

const outfit = Outfit({ subsets: ['latin'], weight: ['300', '400', '600'] })

export const metadata: Metadata = {
  title: 'NFT preview card component',
  description: "This HTML & CSS only challenge is perfect for anyone just starting out or anyone wanting a small project to play around with."
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  )
}
