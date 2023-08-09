/** @type {import('next').NextConfig} */
// const isGithubActions = process.env.GITHUB_ACTIONS || false;
let assetPrefix = "";
let basePath = "/";

const repo = "stspcsr_host";

assetPrefix = `/${repo}/`;
basePath = `/${repo}`;

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "**",
      },
    ],
  },
  output: "export",
  assetPrefix: assetPrefix,
  basePath: basePath,
};

module.exports = nextConfig;
