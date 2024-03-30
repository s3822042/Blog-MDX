import { NewsletterInput } from "@/server/api/newsletter/newsletter-schema"
import { prisma } from "@/server/prisma"
import { TRPCError } from "@trpc/server"

export const signUpNewsletter = async ({
  input,
}: {
  input: NewsletterInput
}) => {
  try {
  } catch (err: any) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: err.message,
    })
  }
}
