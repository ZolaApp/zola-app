const { readdirSync, statSync } = require('fs')
const { join } = require('path')

const SRC_PATH = './src'
const NEXT_DIR_NAME = '.next'
const fileNames = readdirSync(SRC_PATH)
const directories = fileNames.filter(fileName => {
  const filePath = join(SRC_PATH, fileName)

  return statSync(filePath).isDirectory()
})
const aliases = directories.reduce((acc, directoryName) => {
  if (directoryName === NEXT_DIR_NAME) {
    return acc
  }

  const alias = '@' + directoryName
  acc[alias] = join(SRC_PATH, directoryName)

  return acc
}, {})

module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: aliases
      }
    ],
    'transform-flow-strip-types'
  ]
}
