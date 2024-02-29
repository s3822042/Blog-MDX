const { createContentlayerPlugin } = require("next-contentlayer");

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
      {
        source: "/web-development",
        destination: "/articles/web-development/authentication-with-next-and-prisma",
        permanent: true,
      },
      {
        source: "/articles/web-development",
        destination: "/articles/web-development/authentication-with-next-and-prisma",
        permanent: true,
      },
    ]
  },
}

const withContentlayer = createContentlayerPlugin({
  // Additional Contentlayer config options
});

module.exports = withContentlayer(nextConfig);




