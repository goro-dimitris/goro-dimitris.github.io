/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // For GitHub Pages deployment
  // If using username.github.io, leave basePath empty
  // If using username.github.io/repo-name, set basePath to '/repo-name'
  basePath: '',
  trailingSlash: true,
}

module.exports = nextConfig

