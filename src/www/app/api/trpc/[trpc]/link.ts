import { unstable_httpBatchStreamLink } from "@trpc/client"

const getBaseUrl = () => {
  if (typeof window !== "undefined") return ""
  return `http://localhost:3000`
}

export const createLink = () =>
  unstable_httpBatchStreamLink({ url: `${getBaseUrl()}/api/trpc` })
