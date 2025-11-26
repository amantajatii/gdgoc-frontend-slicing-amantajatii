/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gpu.id",
        pathname: "/data-gpu/images/**",
      },
    ],
  },
};

export default nextConfig;
