const withOptimizedImages = require('next-optimized-images');
const path = require('path');

module.exports = withOptimizedImages({
  webpack(config) {
    config.resolve.alias.images = path.join(__dirname, 'images');
    return config;
  },
  webp: {
    lossless: true,
    quality: 100,
  },
  mozjpeg: {
    quality: 100,
  },
  responsive: {
    adapter: require('responsive-loader/sharp'),
    sizes: [320, 640, 960, 1200, 1800, 2400],
  },
  optimizeImagesInDev: true,
});
