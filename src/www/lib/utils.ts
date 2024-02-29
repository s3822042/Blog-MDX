import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import { NUMBERS_OF_ARTICLES_PER_PAGE } from "@/lib/constants"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(input: string | number): string {
  const date = new Date(input)
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`
}

export function slugify(title: any) {
  return title
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-")
}

export function pageCount(number: number) {
  return Math.ceil(number / NUMBERS_OF_ARTICLES_PER_PAGE)
}
