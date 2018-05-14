const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')
const withCSS = require('@zeit/next-css')
module.exports = withPlugins([optimizedImages, withCSS])
