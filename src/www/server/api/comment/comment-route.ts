import {
  createCommentHandler,
  getCommentsHandler,
} from "@/server/api/comment/comment-controller"
import {
  createCommentSchema,
  filterQuery,
} from "@/server/api/comment/comment-schema"
import { publicProcedure, router } from "@/server/trpc"

const CommentRouter = router({
  createComment: publicProcedure
    .input(createCommentSchema)
    .mutation(({ input }) => createCommentHandler({ input })),
  getComments: publicProcedure
    .input(filterQuery)
    .query(({ input }) => getCommentsHandler({ filterQuery: input })),
})

export default CommentRouter
