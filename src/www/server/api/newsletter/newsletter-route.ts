import { signUpNewsletter } from "@/server/api/newsletter/newsletter-controller"
import { newsletterSchema } from "@/server/api/newsletter/newsletter-schema"
import { publicProcedure, router } from "@/server/trpc"

const NewsletterRouter = router({
  signUpNewsletter: publicProcedure
    .input(newsletterSchema)
    .mutation(({ input }) => signUpNewsletter({ input })),
})

export default NewsletterRouter
