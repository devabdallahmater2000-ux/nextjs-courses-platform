import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["images.unsplash.com"], // 🔥 أضف هذا السطر
  },
  experimental: {
    serverComponentsExternalPackages: ['stripe'],
  },
  env: {
    STRIPE_PUBLISHABLE_KEY: process.env.STRIPE_PUBLISHABLE_KEY,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
  },
};

export default nextConfig;
