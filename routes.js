const routes = require('next-routes')()

routes
  .add('login')
  .add('logout')
  .add('register')
  .add('projects')
  .add('project/:id')

module.exports = routes
