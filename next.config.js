/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // For GitHub Pages deployment
  // Project site at: https://goro-dimitris.github.io/ux-ray-site
  basePath: '/ux-ray-site',
  trailingSlash: true,
}

module.exports = nextConfig

