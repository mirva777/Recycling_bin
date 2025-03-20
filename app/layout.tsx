import type React from "react"
import { Inter } from "next/font/google"
import Link from "next/link"
import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Menu, Recycle } from "lucide-react"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Recycling Collection & Distribution",
  description: "A platform for recycling collection and sustainable product distribution",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-16 items-center">
                <Link href="/" className="flex items-center gap-2 mr-6">
                  <Recycle className="h-6 w-6 text-green-600" />
                  <span className="font-bold text-xl hidden sm:inline-block">RecyclingBin</span>
                </Link>
                <nav className="hidden md:flex items-center gap-6 text-sm">
                  <Link href="/" className="font-medium transition-colors hover:text-green-600">
                    Home
                  </Link>
                  <Link href="/recyclers-portal" className="font-medium transition-colors hover:text-green-600">
                    Recycler's Portal
                  </Link>
                  <Link href="/marketplace" className="font-medium transition-colors hover:text-green-600">
                    Marketplace
                  </Link>
                  <Link href="#" className="font-medium transition-colors hover:text-green-600">
                    About Us
                  </Link>
                  <Link href="#" className="font-medium transition-colors hover:text-green-600">
                    Contact
                  </Link>
                </nav>
                <div className="flex items-center ml-auto gap-4">
                  <Button variant="outline" size="icon" className="relative">
                    <ShoppingCart className="h-5 w-5" />
                    <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-green-600 text-white text-xs flex items-center justify-center">
                      0
                    </span>
                  </Button>
                  <Button className="hidden md:flex bg-green-600 hover:bg-green-700">Sign In</Button>
                  <Button variant="outline" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </header>
            <main className="flex-1">{children}</main>
            <footer className="border-t bg-background">
              <div className="container py-8 md:py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div>
                    <Link href="/" className="flex items-center gap-2 mb-4">
                      <Recycle className="h-6 w-6 text-green-600" />
                      <span className="font-bold text-xl">RecyclingBin</span>
                    </Link>
                    <p className="text-sm text-gray-500 mb-4">Turning waste into resources for a sustainable future.</p>
                    <div className="flex gap-4">
                      <a href="#" className="text-gray-500 hover:text-green-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                      </a>
                      <a href="#" className="text-gray-500 hover:text-green-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </a>
                      <a href="#" className="text-gray-500 hover:text-green-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <Link href="/" className="text-gray-500 hover:text-green-600">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link href="/recyclers-portal" className="text-gray-500 hover:text-green-600">
                          Recycler's Portal
                        </Link>
                      </li>
                      <li>
                        <Link href="/marketplace" className="text-gray-500 hover:text-green-600">
                          Marketplace
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="text-gray-500 hover:text-green-600">
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="text-gray-500 hover:text-green-600">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold mb-4">Resources</h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <Link href="#" className="text-gray-500 hover:text-green-600">
                          Recycling Guide
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="text-gray-500 hover:text-green-600">
                          Sustainability Tips
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="text-gray-500 hover:text-green-600">
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="text-gray-500 hover:text-green-600">
                          FAQ
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold mb-4">Contact Us</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="text-gray-500">123 Recycling Way, Green City, EC0 123</li>
                      <li>
                        <a href="mailto:info@ecorecycle.com" className="text-gray-500 hover:text-green-600">
                          info@ecorecycle.com
                        </a>
                      </li>
                      <li>
                        <a href="tel:+1234567890" className="text-gray-500 hover:text-green-600">
                          +1 (234) 567-890
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                  <p className="text-sm text-gray-500">
                    © {new Date().getFullYear()} RecyclingBin. All rights reserved.
                  </p>
                  <div className="flex gap-4 mt-4 md:mt-0">
                    <Link href="#" className="text-sm text-gray-500 hover:text-green-600">
                      Privacy Policy
                    </Link>
                    <Link href="#" className="text-sm text-gray-500 hover:text-green-600">
                      Terms of Service
                    </Link>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'