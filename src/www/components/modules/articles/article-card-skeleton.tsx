import React from "react"

interface ArticleCardSkeletonProps {
  numberOfSkeletons: number
}

export function ArticleCardSkeleton(props: ArticleCardSkeletonProps) {
  const { numberOfSkeletons } = props

  return (
    <div className="container mx-auto grid px-5 pb-3 pt-6 text-gray-600 lg:pb-6 lg:pt-12">
      {[...Array(numberOfSkeletons)].map((_, index) => (
        <div
          key={index}
          className="border-opacity/60 h-full animate-pulse overflow-hidden rounded-lg border-2 border-gray-200"
        >
          <div className="h-36 w-full bg-gray-300 md:h-36 lg:h-48"></div>
          <div className="p-6">
            <div className="mb-4 h-4 w-1/2 bg-gray-300"></div>
            <div className="mb-4 h-4 w-5/6 bg-gray-300"></div>
            <div className="mb-4 h-4 w-2/3 bg-gray-300"></div>
            <div className="mb-4 h-4 w-1/3 bg-gray-300"></div>
            <div className="flex flex-wrap items-center">
              <div className="mr-3 h-4 w-20 bg-gray-300"></div>
              <div className="h-4 w-16 bg-gray-300"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ArticleCardSkeleton
