import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/LandingPage",
  // Disable Image Optimization for static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
