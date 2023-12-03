import type { Metadata } from 'next'
import { Kumbh_Sans } from 'next/font/google'
import './globals.css'

const kumbh = Kumbh_Sans({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'Profile card component',
  description: "This is a perfect challenge to test your layout skills. The card layout doesn't shift, so it's also great for those that haven't dived into responsive websites yet!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={kumbh.className}>{children}</body>
    </html>
  )
}
