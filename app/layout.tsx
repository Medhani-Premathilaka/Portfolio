import './globals.css'
import Navbar from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Your Name - Portfolio',
  description: 'Full Stack Developer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}