const fs = require('fs')
const dotenv = require('dotenv')
dotenv.config()

// Copy all environment variables loaded by `dotenv` to pass them to the
// `transform-define` babel plugin.
const environmentVariables = Object.entries(process.env).reduce(
  (acc, [key, value]) => {
    acc[`process.env.${key}`] = value

    return acc
  },
  {
    SVG_SPRITE: fs.readFileSync('./src/static/icons.svg', { encoding: 'utf8' })
  }
)

module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@components': './src/components',
          '@constants': './src/constants',
          '@containers': './src/containers',
          '@helpers': './src/helpers',
          '@higherOrders': './src/higherOrders',
          '@pages': './src/pages',
          '@types': './src/types'
        }
      }
    ],
    ['transform-define', { ...environmentVariables }],
    ['styled-components', { ssr: true, displayName: true, preprocess: false }],
    'inline-import-graphql-ast',
    'transform-flow-strip-types'
  ]
}
