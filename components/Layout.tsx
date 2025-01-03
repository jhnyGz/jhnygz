import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode
  title?: string
}

export default function Layout({ children, title = 'Cybersecurity Professional - Interactive Resume' }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-black to-blue-900 text-gray-200">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Interactive resume of a cybersecurity professional" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex-grow pt-16">{children}</main>
      <Footer />
    </div>
  )
}

