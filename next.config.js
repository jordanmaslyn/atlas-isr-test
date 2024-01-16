const fs = require("fs");
const { withFaust, getWpHostname } = require("@faustwp/core");

const nextConfig = {};

if (process.env.ATLAS_CACHE_HANDLER_ENABLED === "true") {
  if (nextConfig.experimental == null) {
    nextConfig.experimental = {};
  }

  nextConfig.experimental.incrementalCacheHandlerPath = require.resolve(
    "./.atlas/atlas-cache-handler.js"
  );
  nextConfig.experimental.isrMemoryCacheSize = 0;
}

/**
 * @type {import('next').NextConfig}
 **/
module.exports = withFaust(nextConfig);
