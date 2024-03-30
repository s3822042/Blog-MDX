"use client"

import { useEffect } from "react"

import { queryClient } from "@/lib/query-client"
import { useMounted } from "@/hooks/use-mounted"
import { trpc } from "@/app/_trpc/client"

interface ReportViewProps {
  slug: string
}

export function ReportView(props: ReportViewProps) {
  const mounted = useMounted()

  const { slug } = props

  const mutation = trpc.increaseViews.useMutation({
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [["increaseViews"], { input: { slug }, type: "query" }],
      })

      await queryClient.refetchQueries({
        queryKey: [["getViews"], { input: { slug }, type: "query" }],
      })
    },
  })

  useEffect(() => {
    if (mounted) {
      mutation.mutate({ slug })
    }
  }, [mounted, slug])

  return null
}
