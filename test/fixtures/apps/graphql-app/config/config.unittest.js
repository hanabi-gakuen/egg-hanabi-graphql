exports.keys = 'plugin-graphql'
exports.middleware = ['graphql']
exports.hanabiGraphql = {
  graphiql: false,
  // async onPreGraphiQL(ctx) {
  //   await ctx.service.user.getUserList()
  //   return {}
  // },
  async onPreGraphQL(ctx) {
    await ctx.service.user.getUserList()
    return {}
  },
  path: 'graphql'
}
