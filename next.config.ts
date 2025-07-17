import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone', // optional tapi disarankan
  basePath: '/portofolio1',
  trailingSlash: true, // opsional, tergantung preferensi  
};

export default nextConfig;
