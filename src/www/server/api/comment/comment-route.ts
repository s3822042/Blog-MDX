import {
  createCommentHandler,
  getCommentsHandler,
} from "@/server/api/comment/comment-controller"
import {
  createCommentSchema,
  filterQuery,
} from "@/server/api/comment/comment-schema"
import { t } from "@/server/trpc"

const CommentRouter = t.router({
  createComment: t.procedure
    .input(createCommentSchema)
    .mutation(({ input }) => createCommentHandler({ input })),
  getComments: t.procedure
    .input(filterQuery)
    .query(({ input }) => getCommentsHandler({ filterQuery: input })),
})

export default CommentRouter
