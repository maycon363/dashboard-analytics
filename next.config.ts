const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/dashboard-analytics' : '',
  assetPrefix: isProd ? '/dashboard-analytics/' : '',
  publicRuntimeConfig: {
    basePath: isProd ? '/dashboard-analytics' : '',
  },
};

export default nextConfig;

