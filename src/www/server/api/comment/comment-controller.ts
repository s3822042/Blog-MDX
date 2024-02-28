import {
  CreateCommentInput,
  FilterQueryInput,
} from "@/server/api/comment/comment-schema"
import { prisma } from "@/server/prisma"
import { TRPCError } from "@trpc/server"

export const createCommentHandler = async ({
  input,
}: {
  input: CreateCommentInput
}) => {
  try {
    const comment = await prisma.comment.create({
      data: input,
    })

    return {
      status: "success",
      data: {
        comment,
      },
    }
  } catch (err: any) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: err.message,
    })
  }
}

export const getCommentsHandler = async ({
  filterQuery,
}: {
  filterQuery: FilterQueryInput
}) => {
  try {
    const { limit, page } = filterQuery
    const take = limit || 10
    const skip = (page - 1) * limit

    const comments = await prisma.comment.findMany({
      skip,
      take,
    })

    return {
      status: "success",
      results: comments.length,
      data: {
        comments,
      },
    }
  } catch (err: any) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: err.message,
    })
  }
}
