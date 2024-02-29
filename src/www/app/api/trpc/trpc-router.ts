import commentRouter from "@/server/api/comment/comment-route"
import { t } from "@/server/trpc"
import { createServerSideHelpers } from "@trpc/react-query/server"
import SuperJSON from "superjson"

export const appRouter = t.mergeRouters(commentRouter)

export const createSSRHelper = () =>
  createServerSideHelpers({
    router: appRouter,
    transformer: SuperJSON,
    ctx: () => {},
  })

export type AppRouter = typeof appRouter
