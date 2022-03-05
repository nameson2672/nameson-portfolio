/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    esmExternals: false,
  },
  images: {
    domains: ["images.unsplash.com", "i.ibb.co"],
  },
};

module.exports = nextConfig;
