import { ReactNode } from "react"

interface ImageContainerProps {
  children: ReactNode
}

export function ImageContainer(props: ImageContainerProps) {
  const { children } = props

  return (
    <div className="mt-8 flex flex-1 items-start justify-center md:justify-end">
      {children}
    </div>
  )
}
