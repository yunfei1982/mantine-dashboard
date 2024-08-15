/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: [
      "@mantine/core",
      "@mantine/hooks",
      "@mantine/form",
      "@mantine/dates",
      "@mantine/charts",
      "@mantine/code-highlight",
    ],
  },
};

export default nextConfig;
