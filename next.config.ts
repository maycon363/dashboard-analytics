import { NextConfig } from 'next'

const isProd = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
  basePath: isProd ? '/dashboard-analytics' : '',
  assetPrefix: isProd ? '/dashboard-analytics/' : '',
}

export default nextConfig
