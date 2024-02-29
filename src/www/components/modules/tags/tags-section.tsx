import Link from "next/link"

interface TagsSectionProps {
  text: string
}

export function TagsSection(props: TagsSectionProps) {
  const { text } = props

  return (
    <Link
      href={`/tags/${text}`}
      className="mr-3 text-sm font-medium uppercase text-teal-500 hover:text-teal-600 dark:hover:text-teal-400"
    >
      {text}
    </Link>
  )
}
