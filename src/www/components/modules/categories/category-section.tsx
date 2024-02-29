import Link from "next/link"

import { slugify } from "@/lib/utils"

interface CategorySectionProps {
  text: string
}

export function CategorySection(props: CategorySectionProps) {
  const { text } = props

  const formattedText = slugify(text)

  return (
    <Link
      href={`/categories/${formattedText}`}
      className="mr-3 text-sm font-medium uppercase text-teal-500 hover:text-teal-600 dark:hover:text-teal-400"
    >
      {text}
    </Link>
  )
}
