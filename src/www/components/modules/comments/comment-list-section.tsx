"use client"

import { formatDate, sortByDescending } from "@/lib/utils"
import { useMounted } from "@/hooks/use-mounted"
import { Heading } from "@/components/elements/heading"
import { trpc } from "@/app/_trpc/client"

export function CommentListSection() {
  const mounted = useMounted()
  const { data } = trpc.getComments.useQuery({ limit: 10, page: 1 })

  if (!data) {
    return null
  }

  const sortedComments = sortByDescending(data.data.comments, "createdAt")

  return (
    <>
      {data.data.comments.length > 0 ? (
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
        <p className="text-center">No Comments Found</p>
      )}
    </>
  )
}
