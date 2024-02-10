/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ibt-bucket.s3.ap-northeast-2.amazonaws.com',
      },
    ],
  },
  webpack: (config) => {
    config.resolve.fallback = {
      'mongodb-client-encryption': false,
      aws4: false,
    }

    return config
  },
  experimental: {
    serverActions: true,
  },
}
export default nextConfig
