/** @type {import('next').NextConfig} */
// const isGithubActions = process.env.GITHUB_ACTIONS || false;
// let assetPrefix = "";
// let basePath = "/";

// if (isGithubActions) {
//   const repo = "stspcsr_host";

//   assetPrefix = `/${repo}/`;
//   basePath = `/${repo}`;
// }

const nextConfig = {
  i18n: {
    locales: ["zh-TW", "en"],
    defaultLocale: "zh-TW",
    localeDetection: false,
  },
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
  // output: "export",
  // assetPrefix: assetPrefix,
  // basePath: basePath,
};

module.exports = nextConfig;
