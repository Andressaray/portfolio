import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'animate.css';
import './globals.css'
import 'react-vertical-timeline-component/style.min.css';



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio Andres Saray',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
