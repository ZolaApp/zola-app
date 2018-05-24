// This file doesn’t go through Babel and thus can’t use ES2015 modules.
const routes = require('next-routes')()

// Dynamic routes should be added below.
routes.add('project', '/project/:id')

module.exports = routes
