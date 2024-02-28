import Link from "next/link"

interface TagsSectionProps {
  text: string
}

export function TagsSection(props: TagsSectionProps) {
  const { text } = props

  return (
    <Link href={`/tag/${text}`} legacyBehavior>
      <a className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
        {text.split(" ").join("-")}
      </a>
    </Link>
  )
}
