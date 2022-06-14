/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['miro.medium.com', 'cdn-images-1.medium.com'],
  },
}

module.exports = nextConfig
