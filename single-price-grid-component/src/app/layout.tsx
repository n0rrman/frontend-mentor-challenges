import type { Metadata } from 'next'
import { Karla } from 'next/font/google'
import './globals.css'

const karla = Karla({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: "Single price grid component",
  description: "In this challenge, you will build out the pricing component to the designs provided. This is perfect for beginners and people who want to complete a smaller challenge.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={karla.className}>{children}</body>
    </html>
  )
}
