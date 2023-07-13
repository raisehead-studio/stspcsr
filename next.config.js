/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;
let assetPrefix = "";
let basePath = "/";

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");

  console.log("---------");
  console.log("GITHUB_REPOSITORY", process.env.GITHUB_REPOSITORY);
  console.log("GITHUB_ACTIONS", process.env.GITHUB_ACTIONS);
  console.log("---------");

  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

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
