"use client"

import { queryClient } from "@/lib/query-client"
import { trpc } from "@/app/_trpc/client"

interface ReportViewProps {
  slug: string
}

export function ReportView(props: ReportViewProps) {
  const { slug } = props

  const mutation = trpc.increaseViews.useMutation({
    onSuccess: async () => {
      // Invalidate queries after successful mutation
      await queryClient.invalidateQueries({
        queryKey: [["increaseViews"], { input: { slug }, type: "query" }],
      })

      // Refetch data after mutation using a query
      await queryClient.refetchQueries({
        queryKey: [["getViews"], { input: { slug }, type: "query" }],
      })
    },
  })

  console.log(mutation)

  return null
}
