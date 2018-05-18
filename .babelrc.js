const dotenv = require('dotenv')
dotenv.config()

// Copy all environment variables loaded by `dotenv` to pass them to the
// `transform-define` babel plugin.
const environmentVariables = Object.entries(process.env).reduce(
  (acc, [key, value]) => {
    acc[`process.env.${key}`] = value

    return acc
  },
  {}
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
          '@containers': './src/containers',
          '@higherOrders': './src/higherOrders',
          '@pages': './src/pages'
        }
      }
    ],
    ['transform-define', { ...environmentVariables }],
    ['styled-components', { ssr: true, displayName: true, preprocess: false }],
    'inline-import-graphql-ast',
    'transform-flow-strip-types'
  ]
}
