const path = require("path");
const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@next/bundle-analyzer");
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");

// https://medium.com/ne-digital/how-to-reduce-next-js-bundle-size-68f7ac70c375
// https://medium.com/ne-digital/build-frontend-performance-monitor-dashboard-using-pagespeed-insights-e807a2caa6cf

module.exports = withPlugins(
  [
    withBundleAnalyzer({
      enabled: process.env.ANALYZE === "true",
    }),
  ],

  {
    output: "standalone",
    devIndicators: {
      buildActivity: false,
    },
    reactStrictMode: true,
    // assetPrefix: process.env.NODE_ENV === 'production' ? 'http://localhot:3000/' : undefined,
    // serverRuntimeConfig: {
    //   PROJECT_ROOT: __dirname,
    // },
    swcMinify: true,
    i18n: {
      locales: ["en"],
      defaultLocale: "en",
    },
    images: {
      domains: ["cdn.dribbble.com", "images.unsplash.com"],
    },
    publicRuntimeConfig: {
      // Will be available on both server and client
      staticFolder: "static",
    },
    eslint: {
      dirs: ["src"],
    },

    webpack(config) {
      config.resolve.alias = {
        ...config.resolve.alias,
        // https://blog.usejournal.com/my-awesome-custom-react-environment-variables-setup-8ebb0797d8ac
        environment: path.join(
          __dirname,
          "src",
          "environments",
          process.env.CLIENT_ENV || "production"
        ),
      };

      config.plugins = [
        ...config.plugins,

        process.env.NODE_ENV === "production"
          ? new DuplicatePackageCheckerPlugin()
          : null,
      ].filter(Boolean);

      return config;
    },
  }
);
