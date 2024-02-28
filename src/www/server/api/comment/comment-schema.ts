import { number, object, string, TypeOf } from "zod"

export const createCommentSchema = object({
  content: string({ required_error: "Content is required" }),
})

export const filterQuery = object({
  limit: number().default(1),
  page: number().default(10),
})

export type CreateCommentInput = TypeOf<typeof createCommentSchema>
export type FilterQueryInput = TypeOf<typeof filterQuery>
