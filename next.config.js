/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  output: "export",
  experimental: {
    appDir: true,
  },
  exportTrailingSlash: true, // добавьте это, если у вас проблемы с путями
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
