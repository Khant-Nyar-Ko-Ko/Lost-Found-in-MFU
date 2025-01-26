import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Disable image optimization
  },
  output: "export", // For static export
};

export default nextConfig;
