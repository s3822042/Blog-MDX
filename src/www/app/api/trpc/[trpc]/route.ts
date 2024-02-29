import { fetchRequestHandler } from "@trpc/server/adapters/fetch"

import { appRouter } from "../trpc-router"

const handler = (request: Request) => {
  console.log(`incoming request ${request.url}`)
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req: request,
    router: appRouter,
    onError({ error }) {
      if (error.code === "INTERNAL_SERVER_ERROR") {
        console.error("Something went wrong", error)
      }
    },
    createContext: () => ({}),
  })
}

export { handler as GET, handler as POST }
