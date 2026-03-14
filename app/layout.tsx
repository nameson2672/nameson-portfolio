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
  description:
    'Software engineer focused on cloud-native development on AWS, .NET Core backend systems, and full-stack TypeScript. AWS & CKA certified.',
  keywords: [
    'Nameson Gaudel',
    'Software Engineer',
    'Cloud Engineer',
    'AWS',
    'Kubernetes',
    '.NET Core',
    'TypeScript',
    'React',
    'DevOps',
    'Backend Engineer',
  ],
  authors: [{ name: 'Nameson Gaudel' }],
  creator: 'Nameson Gaudel',
  metadataBase: new URL('https://namesongaudel.com'),
  icons: {
    icon: '/icon.jpeg',
    apple: '/icon.jpeg',
  },
  openGraph: {
    title: 'Nameson Gaudel — Software Engineer',
    description:
      'Software engineer focused on cloud-native development on AWS, .NET Core backend systems, and full-stack TypeScript. AWS & CKA certified.',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/icon.jpeg',
        width: 800,
        height: 800,
        alt: 'Nameson Gaudel',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Nameson Gaudel — Software Engineer',
    description:
      'Software engineer focused on cloud-native development on AWS, .NET Core backend systems, and full-stack TypeScript.',
    images: ['/icon.jpeg'],
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
