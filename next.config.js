const withPWA = require('next-pwa');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

module.exports = withBundleAnalyzer(
  withPWA({
    pwa: {
      dest: 'public',
      disable: true
      // disable: process.env.NODE_ENV === 'development',
      // register: true,
      // scope: '/app',
      // sw: 'service-worker.js',
      // reloadOnOnline : false
    },
    api: { bodyParser: false },
    poweredByHeader: false,
    images: {
      domains: ['falabella.scene7.com']
    }
  })
);
