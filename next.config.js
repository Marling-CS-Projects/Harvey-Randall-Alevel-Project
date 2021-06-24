const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: false,
  })
module.exports = withBundleAnalyzer({
    future: {
        webpack5: true,
    },
});
