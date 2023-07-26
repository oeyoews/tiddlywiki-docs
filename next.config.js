const nextConfig = {};

const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
  defaultShowCopyCode: true,
  staticImage: true,
  latex: true,
});

module.exports = withNextra(nextConfig);
