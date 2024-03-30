import { createContext } from "@/server/context"
import { transformer } from "@/server/utils/transformer"
import { initTRPC } from "@trpc/server"

export const t = initTRPC.context<typeof createContext>().create({
  /**
   * @link https://trpc.io/docs/v11/data-transformers
   */
  transformer,
  /**
   * @link https://trpc.io/docs/v11/error-formatting
   */
  errorFormatter({ shape }) {
    return shape
  },
})

export const createCallerFactory = t.createCallerFactory
export const router = t.router
export const publicProcedure = t.procedure
export const mergeRouters = t.mergeRouters
