const fs = require('fs')
const path = require('path')

module.exports = async graphql => {
  const dirs = graphql.dirs
  const schemas = []

  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) return
    const types = fs.readdirSync(dir)
    types.forEach(type => {
      const schemaFile = path.join(dir, type, 'schema.graphql')
      if (fs.existsSync(schemaFile)) {
        const schema = fs.readFileSync(schemaFile, { encoding: 'utf8' })
        schemas.push(schema)
      }
    })
  })

  return schemas
}
