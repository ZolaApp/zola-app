const dotenv = require('dotenv')

dotenv.config()

// Pass all environment variables from `dotenv` to the `transform-define` babel
// plugin.
module.exports = Object.entries(process.env).reduce((acc, [key, value]) => {
  acc[`process.env.${key}`] = JSON.stringify(value)

  return acc
}, {})
