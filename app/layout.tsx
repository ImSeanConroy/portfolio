import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import Header from './components/Header';
import Footer from './components/Footer';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://imseanconroy.co.uk'),
  title: 'Sean Conroy: Software Engineer at Cisco | Portfolio',
  description: "Junior Software Engineer at Cisco, transforming complex problems into seamless solutions with a touch of creativity. Explore Sean's portfolio.",
  keywords: ["ImSeanConroy", "Software Engineer", "Portfolio", "Web Development"],
  authors: [
    { name: 'Sean Conroy', url: 'https://www.imseanconroy.co.uk' }
  ],
  alternates: {
    canonical: "https://imseanconroy.co.uk",
  },
  openGraph: {
    type: "website",
    url: 'https://www.imseanconroy.co.uk',
    title: 'Sean Conroy: Software Engineer at Cisco | Portfolio',
    description: "Junior Software Engineer at Cisco, transforming complex problems into seamless solutions with a touch of creativity. Explore Sean's portfolio.",
    images: [
      {
        url: 'https://www.imseanconroy.co.uk/socials.png',
        width: 1200,
        height: 630,
        alt: 'Sean Conroy Portfolio Image'
      }
    ],
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ImSeanConroy",
    title: "Sean Conroy: Software Engineer at Cisco | Portfolio",
    description: "Junior Software Engineer at Cisco, transforming complex problems into seamless solutions with a touch of creativity. Explore Sean's portfolio.",
    creator: "@ImSeanConroy",
    images: [
      {
        url: 'https://www.imseanconroy.co.uk/socials.png',
        alt: 'Sean Conroy Portfolio Image'
      }
    ],
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={"text-gray-900 mx-auto max-w-screen-xl " + roboto.className}>
          <Header />
          {children}
          <Footer />
      </body>
    </html>
  )
}
