const _ = require('lodash')
const fs = require('fs')
const path = require('path')

module.exports = async graphql => {
  const dirs = graphql.dirs
  const resolvers = {}

  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) return
    const types = fs.readdirSync(dir)
    types.forEach(type => {
      const resolverFile = path.join(dir, type, 'resolver.js')
      if (fs.existsSync(resolverFile)) {
        const resolver = require(resolverFile)
        _.merge(resolvers, resolver)
      }
    })
  })

  return resolvers
}
