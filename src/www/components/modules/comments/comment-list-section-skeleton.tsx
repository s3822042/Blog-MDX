import { Skeleton } from "@/components/elements/skeleton"

function CommentListSectionSkeleton() {
  return (
    <>
      <Skeleton className="mt-12 h-10 w-1/2" />
      <div className="my-4 border p-6">
        <Skeleton className="h-4 w-1/4 text-sm" />
        <Skeleton className="mt-4 h-6 w-full" />
      </div>
      <div className="my-4 border p-6">
        <Skeleton className="h-4 w-1/4 text-sm" />
        <Skeleton className="mt-4 h-6 w-full" />
      </div>
    </>
  )
}

export { CommentListSectionSkeleton }
