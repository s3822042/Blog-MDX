"use client"

import React from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/elements/icons"

export function Footer() {
  return (
    <div className="w-full px-10 text-gray-500 dark:text-gray-400">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between py-4 sm:flex-row">
        <div className="text-center">
          <div>
            {`© ${new Date().getFullYear()}`}{" "}
            <span className="text-lg font-bold text-yellow-400">
              {siteConfig.author.name}
            </span>
            . All Rights Reserved.
          </div>
        </div>
        <div className="mt-2 text-center text-xl text-gray-500 dark:text-gray-400 md:mt-0">
          <Link
            href={siteConfig.links.github}
            className="mx-1 inline-block pt-1"
          >
            <Icons.gitHub className="size-6 fill-current text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white" />
          </Link>
          <Link
            href={siteConfig.links.linkedin}
            className="mx-1 inline-block pt-1"
          >
            <Icons.linkedin className="size-6 fill-current text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white" />
          </Link>
          <Link
            href={siteConfig.links.facebook}
            className="mx-1 inline-block pt-1"
          >
            <Icons.facebook className="size-6 fill-current text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white" />
          </Link>
        </div>
      </div>
    </div>
  )
}
