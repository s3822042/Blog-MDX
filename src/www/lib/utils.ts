import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import { NUMBERS_OF_ARTICLES_PER_PAGE } from "@/lib/constants"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function sortByDescending<T>(array: T[], property: keyof T): T[] {
  return array.slice().sort((a, b) => {
    return (
      new Date(b[property] as string).getTime() -
      new Date(a[property] as string).getTime()
    )
  })
}

export function formatDate(date: Date): string {
  return date.toLocaleTimeString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`
}

export function slugify(title: string) {
  return title
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-")
}

export function deslugify(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

export function pageCount(number: number) {
  return Math.ceil(number / NUMBERS_OF_ARTICLES_PER_PAGE)
}
