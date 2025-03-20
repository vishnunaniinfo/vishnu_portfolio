/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static exports for GitHub Pages
  trailingSlash: true, // Add trailing slashes for GitHub Pages compatibility
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // Required for static export
  },
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '', // Adjust this to your GitHub repo name
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
};

export default nextConfig;

