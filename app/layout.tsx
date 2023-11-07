import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageMetadata from './components/PageMetadata'

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = PageMetadata({
  title: 'Junior Software Engineer at Cisco - Sean Conroy',
  description: "Transforming complex problems into seamless solutions with a touch of creativity. Explore portfolio to learm more.",
  keywords: ["ImSeanConroy", "Software Engineer", "Portfolio", "Web Development", "Cisco"],
  link: 'https://imseanconroy.co.uk',
  image: 'https://www.imseanconroy.co.uk/other/socials.png'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className='text-gray-900 mx-auto max-w-screen-xl'>
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
