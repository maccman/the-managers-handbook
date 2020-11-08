const withNextra = require('nextra')('nextra-theme-docs', './theme.config.js')
const withOffline = require('next-offline')

const nextConfig = {
  workboxOpts: {
    swDest: process.env.NEXT_EXPORT
      ? 'service-worker.js'
      : 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /\.(png|woff2|svg)(\?.*)?$/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'staticOfflineCache',
        }
      },
      {
        urlPattern: /^https?.*/,
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'revalidateOfflineCache',
        },
      },
    ],
  },

  async rewrites() {
    return [
      {
        source: '/service-worker.js',
        destination: '/_next/static/service-worker.js',
      },
    ]
  },
}

module.exports = withOffline(withNextra(nextConfig))
