import React from "react";
import Footer from "./Footer";
import ThemeSwitch from "./ThemeSwitch";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { siteMetadata, headerNavLinks } from "utils/constant";

const LayoutWrapper = ({ children }: any) => {
  return (
      <div className="flex flex-col justify-between h-screen">
        <header className="flex items-center justify-between px-4 py-10">
          <div>
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <div className="flex items-center justify-between">
                <div className="mr-3"></div>
                {typeof siteMetadata.headerTitle === "string" ? (
                  <div className="hidden h-6 text-2xl font-semibold sm:block">
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )}
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
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
  );
};

export default LayoutWrapper;
