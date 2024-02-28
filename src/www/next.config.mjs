import { createContentlayerPlugin } from "next-contentlayer"
const { env } = require('src/www/server/env');


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    NODE_ENV: env.NODE_ENV,
  },
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "i.imgur.com",
      },
      {
        protocol: "https",
        hostname: "imgur.com",
      },
    ],
  },
  redirects() {
    return [
      {
        source: "/algorithm",
        destination: "/docs/algorithm/series-algorithm-two-sum",
        permanent: true,
      },
      {
        source: "/docs/algorithm",
        destination: "/docs/algorithm/series-algorithm-two-sum",
        permanent: true,
      },
    ]
  },
}

const withContentlayer = createContentlayerPlugin({
  // Additional Contentlayer config options
})

export default withContentlayer(nextConfig)



