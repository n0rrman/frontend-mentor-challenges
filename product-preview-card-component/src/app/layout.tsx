import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Product preview card component',
  description: 'This HTML & CSS-only challenge will be perfect for anyone starting to build responsive projects.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
