import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  serverExternalPackages: ['svg-captcha'],
  async rewrites() {
    return [
      {
        source: '/landing/:path*',
        destination: '/:path*',
      },
      {
        source: '/hotel-travel-assistance',
        destination: '/travel-assistance',
      },
      {
        source: '/assets/:path*',
        destination: '/Asset/:path*',
      },
      {
        source: '/landing/hotel-travel-assistance',
        destination: '/travel-assistance',
      },
    ];
  },
};

export default nextConfig;

