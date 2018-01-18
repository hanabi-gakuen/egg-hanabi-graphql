const fs = require('fs')
const path = require('path')

module.exports = async (graphql, app) => {
  const dirs = graphql.dirs
  const schemas = []

  dirs.forEach(dir => {
    const basePath = path.isAbsolute(dir) ? dir : path.join(app.baseDir, dir)
    const types = fs.readdirSync(basePath)
    types.forEach(type => {
      const schemaFile = path.join(basePath, type, 'schema.graphql')
      if (fs.existsSync(schemaFile)) {
        const schema = fs.readFileSync(schemaFile, { encoding: 'utf8' })
        schemas.push(schema)
      }
    })
  })

  return schemas
}
