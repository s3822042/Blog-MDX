import { Skeleton } from "@/components/elements/skeleton"

export function ArticleCardSkeleton() {
  return (
    <div className="container mx-auto grid px-5 pb-3 pt-6 text-gray-600 lg:pb-6 lg:pt-12">
      <div className="border-opacity/60 h-full overflow-hidden rounded-lg border-2 border-gray-200">
        <Skeleton className="h-36 w-full lg:h-48" />
        <div className="p-6">
          <Skeleton className="mb-1 h-4 w-20" />
          <Skeleton className="mb-3 h-6 w-3/4" />
          <Skeleton className="mb-3 h-4 w-full" />
          <Skeleton className="mb-3 h-4 w-1/2" />
          <div className="flex flex-wrap items-center">
            <Skeleton className="inline-flex h-4 w-24 items-center md:mb-2 lg:mb-0" />
            <Skeleton className="ml-auto mr-2 inline-flex h-4 w-16 items-center md:ml-0 lg:ml-auto" />
            <Skeleton className="mr-2 inline-flex h-4 w-16 items-center" />
            <Skeleton className="inline-flex h-4 w-16 items-center" />
          </div>
        </div>
      </div>
    </div>
  )
}
