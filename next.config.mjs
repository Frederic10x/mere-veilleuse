import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'phreeounfbfqkldnzinn.supabase.co',
        pathname: '/storage/v1/s3',
      },
    ],
  },
}

export default withPayload(nextConfig)
