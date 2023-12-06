import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '3-column preview card component',
  description: "This challenge is perfect if you're just getting started. The shift between the layouts will be a nice test if you're new to building responsive projects.",
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
