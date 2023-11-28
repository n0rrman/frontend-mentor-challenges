import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Stats preview card component',
  description: "This is a great small challenge to help get you used to building to a design. There's no JS in this project, so you'll be able to focus on your HTML & CSS skills.",
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
