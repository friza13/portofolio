import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Friza Tri Maulana — System Administrator & Developer",
  description:
    "Portfolio of Friza Tri Maulana — System Administrator, Software Developer & Network Engineer based in Indonesia. Red Hat & MikroTik certified.",
  keywords: [
    "Friza Tri Maulana",
    "System Administrator",
    "Network Engineer",
    "Software Developer",
    "Linux",
    "MikroTik",
    "Red Hat",
    "Portfolio",
  ],
  authors: [{ name: "Friza Tri Maulana" }],
  openGraph: {
    title: "Friza Tri Maulana — System Administrator & Developer",
    description:
      "System Administrator, Software Developer & Network Engineer based in Indonesia.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
