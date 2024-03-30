import { object, string, TypeOf } from "zod"

export const viewsSchema = object({
  slug: string({ required_error: "Slug is required" }),
})

export type ViewsInput = TypeOf<typeof viewsSchema>
