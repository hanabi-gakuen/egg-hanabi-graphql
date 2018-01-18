const fs = require('fs')
const path = require('path')

module.exports = (graphql, app) => {
  const dirs = graphql.dirs
  const classes = new Map()

  dirs.forEach(dir => {
    const basePath = path.isAbsolute(dir) ? dir : path.join(app.baseDir, dir)
    const types = fs.readdirSync(basePath)
    types.forEach(type => {
      const connectorFile = path.join(basePath, type, 'connector.js')
      if (fs.existsSync(connectorFile)) {
        const Connector = require(connectorFile)
        classes.set(type, Connector)
      }
    })
  })

  return classes
}
