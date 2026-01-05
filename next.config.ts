import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove output: "export" for Vercel - it handles Next.js natively
  trailingSlash: true,
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
