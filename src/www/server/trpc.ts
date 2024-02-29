import { Context } from "@/server/context"
import { transformer } from "@/server/utils/transformer"
import { initTRPC } from "@trpc/server"

export const t = initTRPC.context<Context>().create({
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
