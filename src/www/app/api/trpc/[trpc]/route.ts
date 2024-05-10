import { appRouter } from "@/server"
import { createContext } from "@/server/context"
import { fetchRequestHandler } from "@trpc/server/adapters/fetch"

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
    createContext: async () => await createContext(),
  })
}

export { handler as GET, handler as POST }
