import { NewsletterInput } from "@/server/api/newsletter/newsletter-schema"
import { prisma } from "@/server/prisma"
import { TRPCError } from "@trpc/server"

export const signUpNewsletter = async ({
  input,
}: {
  input: NewsletterInput
}) => {
  try {
    const { email } = input

    const existingNewsletter = await prisma.newsletter.findUnique({
      where: {
        email,
      },
    })

    if (existingNewsletter) {
      throw new Error("Email address already registered for newsletter")
    }

    const newsletter = await prisma.newsletter.create({
      data: {
        email: input.email,
        isRegistered: true,
      },
    })

    return {
      status: "success",
      data: {
        newsletter,
      },
    }
  } catch (err: any) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: err.message,
    })
  }
}
