/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/**',
      },
    ],
  },
  // SEO and Performance Optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  // Enable static optimization
  trailingSlash: false,
  // Hide Vercel branding
  experimental: {
    removeConsole: true,
  },
  // Add security headers and hide server info
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          // Hide server information completely
          {
            key: 'Server',
            value: 'Advocate Supriya Legal Services',
          },
          // Custom branding everywhere
          {
            key: 'X-Powered-By',
            value: 'Advocate Supriya Legal Services',
          },
          // Hide Vercel completely
          {
            key: 'X-Vercel-Id',
            value: 'Advocate Supriya Legal Services',
          },
          {
            key: 'X-Vercel-Edge',
            value: 'Advocate Supriya Legal Services',
          },
          {
            key: 'X-Vercel-Cache',
            value: 'Advocate Supriya Legal Services',
          },
          // Business identity
          {
            key: 'X-Business-Name',
            value: 'Advocate Supriya Legal Services',
          },
          {
            key: 'X-Legal-Services',
            value: 'Criminal Law, Service Matters, Consumer Forum',
          },
        ],
      },
    ]
  },
  // Environment variables for custom branding
  env: {
    CUSTOM_NAME: 'Advocate Supriya Legal Services',
    CUSTOM_BRAND: 'Best Patna Lawyer',
  },
}

module.exports = nextConfig
