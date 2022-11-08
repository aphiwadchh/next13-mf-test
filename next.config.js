const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config, options) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'nextremote',
          filename: 'static/chunks/remoteEntry.js',
          exposes: {
            './HelloWorld': './pages/hello-world',
          },
          shared: {},
        })
      );

    return config;
  },
}

module.exports = nextConfig
