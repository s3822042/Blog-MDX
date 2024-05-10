"use client"

import { formatDate, sortByDescending } from "@/lib/utils"
import { useMounted } from "@/hooks/use-mounted"
import { Heading } from "@/components/elements/heading"
import { CommentListSectionSkeleton } from "@/components/modules/comments/comment-list-section-skeleton"
import { trpc } from "@/app/_trpc/client"

export function CommentListSection() {
  const mounted = useMounted()
  const { data: commentData, isLoading } = trpc.getComments.useQuery({ limit: 10, page: 1 })

  if (isLoading) return <CommentListSectionSkeleton />

  const sortedComments = sortByDescending(commentData!.data.comments, "createdAt")

  return (
    <>
      {commentData && commentData.data.comments.length > 0 ? (
        <>
          <Heading as="h2" size="3xl" className="mt-12">
            What people are saying
          </Heading>
          {mounted &&
            sortedComments.map((comment, index) => (
              <div className="my-4 border p-6" key={index}>
                <header className="text-sm">
                  Posted by {comment.nickname} on{" "}
                  {formatDate(comment.createdAt)}
                </header>
                <p className="mt-4">{comment.content}</p>
              </div>
            ))}
        </>
      ) : (
        <p className="mt-12 text-center">No Comments Found</p>
      )}
    </>
  )
}
