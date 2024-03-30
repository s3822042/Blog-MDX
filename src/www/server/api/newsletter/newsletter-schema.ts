import { object, string, TypeOf } from "zod"

export const newsletterSchema = object({
  email: string({ required_error: "Email is required" }),
})

export type NewsletterInput = TypeOf<typeof newsletterSchema>
