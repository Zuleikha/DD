/** @type {import('next').NextConfig} */
const nextConfig = {
  // Explicitly use Pages Router
  useFileSystemPublicRoutes: true,
  
  // Prevent App Router usage
  experimental: {
    appDir: false,
  },
  
  // Other standard settings
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
