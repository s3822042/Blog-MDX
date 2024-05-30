import { unstable_httpBatchStreamLink } from "@trpc/client"

const getBaseUrl = () => {
  if (typeof window !== "undefined") return ""
  if (process.env.NODE_ENV === 'production') {
    return "https://blog.luanvothanh.com";
  } else {
    return 'http://localhost:3000';
  }
}

export const createLink = () =>
  unstable_httpBatchStreamLink({ url: `${getBaseUrl()}/api/trpc` })
