/** @type {import('next').NextConfig} */

const repo = "stspcsr_host";
const assetPrefix = `/${repo}/`;
const basePath = `/${repo}`;

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "**",
      },
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
  assetPrefix: assetPrefix,
  basePath: basePath,
};

module.exports = nextConfig;
