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
      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 mr-3 text-sm font-medium uppercase"
    >
      {text}
    </Link>
  )
}
