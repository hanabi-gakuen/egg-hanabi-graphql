const path = require('path')
module.exports = app => {
  app.graphql.import(path.join(__dirname, '/graphql'))
}
