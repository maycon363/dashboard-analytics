import { NextConfig } from 'next'

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  basePath: isProd ? '/dashboard-analytics' : '',
  assetPrefix: isProd ? '/dashboard-analytics/' : '',
  output: 'export',
}

export default nextConfig
