/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['ipfs.infura.io', 'jha-mrpl.infura-ipfs.io'],
  },
};

module.exports = nextConfig;
