module.exports = app => {
  app.graphql = require('./lib/graphqlCreate')(app.config, app)
}
