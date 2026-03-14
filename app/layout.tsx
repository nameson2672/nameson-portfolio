import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import './globals.css'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: {
    default: 'Nameson Gaudel — Software Engineer',
    template: '%s | Nameson Gaudel',
  },
  description: 'Software engineer building distributed systems and writing about the craft.',
  openGraph: {
    title: 'Nameson Gaudel',
    description: 'Software engineer building distributed systems and writing about the craft.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{ backgroundColor: '#F5F0E8' }} className={GeistSans.className}>
      <body style={{ backgroundColor: '#F5F0E8', minHeight: '100vh' }}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
