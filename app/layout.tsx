import './globals.css'
import Navbar from '@/components/Nav'
import Footer from '@/components/Footer'
import { ThemeProvider } from "@/components/theme-provider"


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
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          </ThemeProvider>
      </body>
    </html>
  )
}