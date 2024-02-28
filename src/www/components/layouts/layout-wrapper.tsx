import React from "react"
import Link from "next/link"

import { headerNavLinks } from "@/lib/constants"
import { ScrollToTop } from "@/components/elements/scroll-to-top"
import { ThemeSwitch } from "@/components/elements/theme-switch"
import { Footer } from "@/components/modules/navigation/footer"
import { MobileNav } from "@/components/modules/navigation/mobile-nav"

interface LayoutWrapperProps {
  children: React.ReactNode
}

export function LayoutWrapper({ children }: LayoutWrapperProps) {
  return (
    <div className="mx-auto flex h-screen flex-col px-4 sm:px-6 xl:px-0">
      <ScrollToTop />
      <header className="flex items-center justify-between px-4 py-10">
        <div>
          <Link href="/" aria-label="header-title">
            <div className="flex items-center justify-between">
              <div className="mr-3"></div>
              <div className="hidden h-6 text-2xl font-semibold sm:block">
                Vo Thanh Luan
              </div>
            </div>
          </Link>
        </div>
        <div className="flex items-center text-base leading-5">
          <div className="hidden sm:block">
            {headerNavLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="p-1 font-medium text-gray-900 dark:text-gray-400 sm:p-4"
              >
                {link.title}
              </Link>
            ))}
          </div>

          <ThemeSwitch />
          <MobileNav />
        </div>
      </header>

      <main className="grow">{children}</main>
      <Footer />
    </div>
  )
}

export default LayoutWrapper
