import React from "react";

import Link from "next/link";

import Footer from "components/navigation/Footer";
import MobileNav from "components/navigation/MobileNav";
import ScrollTopAndComment from "components/ScrollTopAndComment";
import ThemeSwitch from "components/ThemeSwitch";
import { siteMetadata, headerNavLinks } from "utils/constant";

const LayoutWrapper = ({ children }: any) => {
  return (
    <div className="mx-auto flex h-screen flex-col px-4 sm:px-6 xl:px-0">
      <ScrollTopAndComment />
      <header className="flex items-center justify-between px-4 py-10">
        <div>
          <Link href="/" aria-label={siteMetadata.headerTitle}>
            <div className="flex items-center justify-between">
              <div className="mr-3"></div>
              <div className="hidden h-6 text-2xl font-semibold sm:block">
                {siteMetadata.headerTitle}
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
                className="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-400"
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
  );
};

export default LayoutWrapper;
