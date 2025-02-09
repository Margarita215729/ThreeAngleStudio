import "./globals.css"
import { Inter } from "next/font/google"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import type React from "react"
import MouseMoveEffect from "@/components/MouseMoveEffect"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "ThreeangleStudio - Photography and Makeup Services",
  description: "Professional photography and makeup services in Pennsylvania",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MouseMoveEffect />
        <div className="relative min-h-screen overflow-hidden">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

