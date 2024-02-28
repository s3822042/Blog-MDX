import commentRouter from "@/server/api/comment/comment-route"
import { t } from "@/server/trpc"
import { createServerSideHelpers } from "@trpc/react-query/server"
import SuperJSON from "superjson"

const healthCheckerRouter = t.router({
  healthchecker: t.procedure.query(({ ctx }) => {
    return {
      status: "success",
      message: "Welcome to trpc with Next.js 14 and React Query",
    }
  }),
})

/**
 * Create a router
 * @link https://trpc.io/docs/v11/router
 */
export const router = t.router

/**
 * Create an unprotected procedure
 * @link https://trpc.io/docs/v11/procedures
 **/
export const publicProcedure = t.procedure

/**
 * Create a server-side caller
 * @link https://trpc.io/docs/v11/server/server-side-calls
 */
export const createCallerFactory = t.createCallerFactory

export const appRouter = t.mergeRouters(commentRouter, healthCheckerRouter)

export const createSSRHelper = () =>
  createServerSideHelpers({
    router: appRouter,
    transformer: SuperJSON,
    ctx: () => {},
  })

export type AppRouter = typeof appRouter
