"use client"

import React, { useState } from "react"
import { trpc } from "@/server/utils/trpc"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { getFetch, httpBatchLink, loggerLink } from "@trpc/client"
import superjson from "superjson"

export const TrpcProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const url = process.env.NEXT_PUBLIC_APP_URL
    ? `https://${process.env.NEXT_PUBLIC_APP_URL}`
    : "http://localhost:3000/api/trpc/"

  const queryClient = new QueryClient({
    defaultOptions: { queries: { staleTime: 5 * 1000 } },
  })

  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        loggerLink({
          enabled: () => true,
        }),
        httpBatchLink({
          url,
          fetch: async (input, init?) => {
            const fetch = getFetch()
            return fetch(input, {
              ...init,
              credentials: "include",
            })
          },
        }),
      ],
      transformer: superjson,
    })
  )
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </trpc.Provider>
  )
}
