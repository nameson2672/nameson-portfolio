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
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(md)$/,
      use: [
        {
          loader: require.resolve("babel-loader"),
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
        {
          loader: require.resolve("md-react-loader"),
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
