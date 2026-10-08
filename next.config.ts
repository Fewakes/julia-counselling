import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      { source: "/contact", destination: "/qatar/contact/", permanent: true },
      { source: "/about", destination: "/qatar/about/", permanent: true },
      { source: "/approach", destination: "/qatar/approach/", permanent: true },
      { source: "/services", destination: "/qatar/child-counselling-doha/", permanent: true },
      { source: "/faq", destination: "/qatar/faq/", permanent: true },
    ];
  },
};

export default nextConfig;
