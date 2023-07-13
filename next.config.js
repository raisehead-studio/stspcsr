/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.stspcsr.com.tw",
        port: "",
        pathname: "/images/home_logo/**",
      },
      {
        protocol: "https",
        hostname: "www.stspcsr.com.tw",
        port: "",
        pathname: "/user_files/article_2021/**",
      },
      {
        protocol: "https",
        hostname: "www.stspcsr.com.tw",
        port: "",
        pathname: "/mages/home/**",
      },
      {
        protocol: "https",
        hostname: "www.stspcsr.com.tw",
        port: "",
        pathname: "/images/home/**",
      },
      {
        protocol: "https",
        hostname: "www.stspcsr.com.tw",
        port: "",
        pathname: "/user_files/report/**",
      },
    ],
  },
  output: "export",
};

module.exports = nextConfig;
