const fs = require('fs')
const path = require('path')

module.exports = graphql => {
  const dirs = graphql.dirs
  const classes = new Map()

  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) return
    const types = fs.readdirSync(dir)
    types.forEach(type => {
      const connectorFile = path.join(dir, type, 'connector.js')
      if (fs.existsSync(connectorFile)) {
        const Connector = require(connectorFile)
        classes.set(type, Connector)
      }
    })
  })

  return classes
}
