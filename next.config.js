const withPlugins = require('next-compose-plugins')
const withOptimizedImages = require('next-optimized-images')
const withCSS = require('@zeit/next-css')

module.exports = withPlugins([withOptimizedImages, withCSS])
