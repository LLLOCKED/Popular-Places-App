const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')]
  },
  images: {
    domains: ['upload.wikimedia.org']
  },
  env: {
    MAP_KEY: 'AIzaSyAt6eDjDhxS2LxWoY_eu2k-RhobPYTuDO0'
  }
};

module.exports = nextConfig;
