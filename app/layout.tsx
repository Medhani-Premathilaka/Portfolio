import "./globals.css";
import Navbar from "@/components/Nav";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import ThreeBackground from "@/components/ThreeBackground";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Medhani Premathilaka",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning={true}>
      <head>
        <link rel="icon" href="/images/medhani.svg" />
      </head>
      <body
        suppressHydrationWarning={true}
        className={`${inter.className} relative`}
        style={{ background: "transparent" }}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ThreeBackground />
          <div className="relative z-10">
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
