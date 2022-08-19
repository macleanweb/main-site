const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `
      @import '_variables.scss';
      @import 'mixins/mixins.scss';
      `,
  },
}

module.exports = nextConfig
