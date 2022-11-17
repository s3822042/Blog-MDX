/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "i.imgur.com", "imgur.com"],
    dangerouslyAllowSVG: true,
  },
};

module.exports = withContentlayer(nextConfig);
