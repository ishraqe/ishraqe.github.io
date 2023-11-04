/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["play.google.com", "apps.apple.com"]
  }
};

module.exports = nextConfig;
