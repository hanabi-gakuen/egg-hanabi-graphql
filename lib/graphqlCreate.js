const { makeExecutableSchema } = require('graphql-tools')
const path = require('path')

function graphqlCreate(config, app) {
  const graphql = {}

  graphql.dirs = app.loader.getLoadUnits().map(
    u => path.join(u.path, config.hanabiGraphql.path)
  )

  const load = async () => {
    graphql.schemas = await require('./loader/schema')(graphql, app)
    graphql.connectors = await require('./loader/connector')(graphql, app)
    graphql.resolvers = await require('./loader/resolver')(graphql, app)
  }

  app.beforeStart(async () => {
    await load()
    let schema = null
    Object.defineProperties(app, {
      schema: {
        get() {
          if (!schema) {
            schema = makeExecutableSchema({
              typeDefs: graphql.schemas,
              resolvers: graphql.resolvers
            })
          }
          return schema
        }
      },
      connector: {
        get() {
          return graphql.connectors
        }
      }
    })
  })
  return graphql
}

module.exports = graphqlCreate
