import React from "react"

import "@/styles/globals.css"

import { Metadata, Viewport } from "next"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import LayoutWrapper from "@/components/layouts/layout-wrapper"
import { ThemeProvider } from "@/components/layouts/theme-provider"
import { TrpcProvider } from "@/components/layouts/trpc-provider"
import { Toaster } from "@/components/modules/toaster"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: [
    {
      name: siteConfig.author.name,
      url: siteConfig.author.url,
    },
  ],
  creator: siteConfig.author.name,
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en">
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.className
          )}
        >
          <TrpcProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme={siteConfig.theme}
              enableSystem
              disableTransitionOnChange
            >
              <LayoutWrapper>{children}</LayoutWrapper>
            </ThemeProvider>
          </TrpcProvider>
          <Toaster />
        </body>
      </html>
    </>
  )
}
