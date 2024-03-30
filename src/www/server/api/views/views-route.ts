import {
  getViewsHandler,
  increaseViewCountHandler,
} from "@/server/api/views/views-controller"
import { viewsSchema } from "@/server/api/views/views-schema"
import { publicProcedure, router } from "@/server/trpc"

const ViewsRouter = router({
  increaseViews: publicProcedure
    .input(viewsSchema)
    .mutation(({ input }) => increaseViewCountHandler({ input })),
  getViews: publicProcedure
    .input(viewsSchema)
    .query(({ input }) => getViewsHandler({ input })),
})

export default ViewsRouter
