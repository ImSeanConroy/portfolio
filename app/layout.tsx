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
  keywords: ["ImSeanConroy"],
  authors: [
    { name: 'Sean Conroy', url: 'https://www.imseanconroy.co.uk' }
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: 'https://www.imseanconroy.co.uk',
    title: 'Sean Conroy: Software Engineer at Cisco | Portfolio',
    description: "Junior Software Engineer at Cisco, transforming complex problems into seamless solutions with a touch of creativity. Explore Sean's portfolio.",
    images: ["/about.png"],
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sean Conroy: Software Engineer at Cisco | Portfolio",
    description: "Junior Software Engineer at Cisco, transforming complex problems into seamless solutions with a touch of creativity. Explore Sean's portfolio.",
    creator: "@ImSeanConroy",
    images: ["/about.png"],
  },
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
