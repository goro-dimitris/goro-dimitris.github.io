/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // For local development - removed basePath to run on root
  trailingSlash: true,
}

module.exports = nextConfig

