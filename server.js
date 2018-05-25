// This file doesn’t go through Babel and thus can’t use ES2015 modules.
const { createServer } = require('http')
const dotenv = require('dotenv')
const next = require('next')
const routes = require('./routes')

// This only loads the custom server’s environment variables. The app’s
// environment variables are still loaded using the `transform-define` babel
// plugin in `.babelrc.js`.
dotenv.config()

const app = next({ dev: process.env.NODE_ENV === 'development', dir: './src/' })
const handler = routes.getRequestHandler(app)
const port = process.env.PORT || 3000

app.prepare().then(async () => {
  await createServer(handler).listen(port)
  console.info(`✨  Zola app running on port ${port}. ✨`)
})

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled rejection at:', promise, 'Reason:', reason)
})
