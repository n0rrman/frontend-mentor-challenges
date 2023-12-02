import type { Metadata } from 'next'
import { Hanken_Grotesk } from 'next/font/google'
import './globals.css'

const hanken = Hanken_Grotesk({ subsets: ['latin'], weight: ['500', '700', '800'] })

export const metadata: Metadata = {
  title: 'Results summary component',
  description: "This challenge has something for everyone. It's a HTML and CSS only project, but we've also provided a JSON file of the test results for anyone wanting to practice JS.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={hanken.className}>{children}</body>
    </html>
  )
}
