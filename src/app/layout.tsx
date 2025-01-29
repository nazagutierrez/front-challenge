import "./globals.css"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { Metadata } from "next"
import ReduxProvider from "./store/ReduxProvider"
import Head from "next/head"

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
       <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>My store</title>
        <meta
          name="description"
          content="Best products in US"
        />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="My store" />
        <meta
          property="og:description"
          content="Explore a big amount of products"
        />
        <meta property="og:image" content="/image.webp" />
      </Head>
      <ReduxProvider>
        <body className={`${inter.className} bg-[#131313] flex flex-col min-h-screen`}>
          <Header />
          <main className="flex-grow  container mx-auto px-4 py-8">{children}</main>
          <Footer />
        </body>
      </ReduxProvider>
    </html>
  )
}