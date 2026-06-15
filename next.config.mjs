/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 生产环境把整个应用挂在 /ppt 下，所有静态资源（/_next/static、/icon.jpg 等）自动加 /ppt 前缀
  // 开发环境（next dev）不启用，访问 / 即可
  ...(process.env.NODE_ENV === "production" ? { basePath: "/ppt" } : {}),
};

export default nextConfig;
