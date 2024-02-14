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
  experimental: { serverComponentsExternalPackages: ['@aws-sdk'] },
  webpack: (config) => {
    config.resolve.fallback = {
      'mongodb-client-encryption': false,
      aws4: false,
    }

    return config
  },
}
export default nextConfig
