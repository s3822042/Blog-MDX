import commentRouter from "@/server/api/comment/comment-route"
import viewsRouter from "@/server/api/views/views-route"
import { mergeRouters } from "@/server/trpc"

export const appRouter = mergeRouters(commentRouter, viewsRouter)

export type AppRouter = typeof appRouter
