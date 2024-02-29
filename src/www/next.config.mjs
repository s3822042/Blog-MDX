import { createContentlayerPlugin } from "next-contentlayer"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "i.postimg.cc",
      },
    ],
  },
  redirects() {
    return [
      {
        source: "/algorithm",
        destination: "/articles/algorithm/series-algorithm-two-sum",
        permanent: true,
      },
      {
        source: "/articles/algorithm",
        destination: "/articles/algorithm/series-algorithm-two-sum",
        permanent: true,
      },
    ]
  },
}

const withContentlayer = createContentlayerPlugin({
  // Additional Contentlayer config options
})

export default withContentlayer(nextConfig)



