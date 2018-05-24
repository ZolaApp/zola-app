// This file doesn’t go through Babel and thus can’t use ES2015 modules.
const routes = require('next-routes')()

routes
  .add('login')
  .add('logout')
  .add('register')
  .add('projects')
  .add('project/:id')

module.exports = routes
