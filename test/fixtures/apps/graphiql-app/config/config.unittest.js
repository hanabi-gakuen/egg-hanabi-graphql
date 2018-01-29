exports.keys = 'plugin-graphql'
exports.middleware = ['graphql']
exports.hanabiGraphql = {
  graphiql: true,
  async onPreGraphiQL() {
    return {}
  }
}
