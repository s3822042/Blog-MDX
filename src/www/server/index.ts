import commentRouter from "@/server/api/comment/comment-route"
import newsletterRouter from "@/server/api/newsletter/newsletter-route"
import viewsRouter from "@/server/api/views/views-route"
import { mergeRouters } from "@/server/trpc"

export const appRouter = mergeRouters(
  commentRouter,
  viewsRouter,
  newsletterRouter
)

export type AppRouter = typeof appRouter
