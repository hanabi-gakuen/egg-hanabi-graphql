const _ = require('lodash')
const fs = require('fs')
const path = require('path')

module.exports = async (graphql, app) => {
  const dirs = graphql.dirs
  const resolvers = {}

  dirs.forEach(dir => {
    const basePath = path.isAbsolute(dir) ? dir : path.join(app.baseDir, dir)
    const types = fs.readdirSync(basePath)
    types.forEach(type => {
      const resolverFile = path.join(basePath, type, 'resolver.js')
      if (fs.existsSync(resolverFile)) {
        const resolver = require(resolverFile)
        _.merge(resolvers, resolver)
      }
    })
  })

  return resolvers
}
