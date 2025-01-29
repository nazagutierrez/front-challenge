import "./globals.css"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { Metadata } from "next"
import ReduxProvider from "./store/ReduxProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "My E-commerce Store",
  description: "Shop the latest products",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ReduxProvider>
        <body className={`${inter.className} bg-[#131313] lg:bg-radial-faded flex flex-col min-h-screen`}>
          <Header />
          <main className="flex-grow  container mx-auto px-4 py-8">{children}</main>
          <Footer />
        </body>
      </ReduxProvider>
    </html>
  )
}