"use client"

import {
  useState,
  type ComponentProps,
  type FC,
  type PropsWithChildren,
} from "react"
import { QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import superjson from "superjson"

import { queryClient } from "@/lib/query-client"
import { trpc } from "@/app/_trpc/client"
import { createLink } from "@/app/api/trpc/[trpc]/link"

type TrpcProviderProps = PropsWithChildren<{
  client?: ComponentProps<typeof trpc.Provider>["client"]
}>

export const TrpcProvider: FC<TrpcProviderProps> = ({ client, children }) => {
  const [trpcClient] = useState(
    () =>
      client ??
      trpc.createClient({ links: [createLink()], transformer: superjson })
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
