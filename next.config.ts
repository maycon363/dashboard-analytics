const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/dashboard-analytics' : '',
  assetPrefix: isProd ? '/dashboard-analytics/' : '',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
