const withPlugins = require('next-compose-plugins')
const withOptimizedImages = require('next-optimized-images')
const withCSS = require('@zeit/next-css')

const webpack = (config = {}) => {
  // Disable Babel’s cache so that static `.graphql` files are updated correctly
  // on every compilation.
  // ⚠️ Editing those files sadly can’t trigger a new compilation.
  config.module.rules
    .filter(rule => rule.use && rule.use.loader === 'babel-loader')
    .forEach(rule => {
      rule.use.options.cacheDirectory = false
    })

  return config
}

module.exports = withPlugins([withOptimizedImages, withCSS], { webpack })
