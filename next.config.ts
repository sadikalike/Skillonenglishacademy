/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // ❌ remove this
  // output: 'export',
  trailingSlash: true,
}

module.exports = nextConfig;