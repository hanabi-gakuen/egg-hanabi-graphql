const path = require('path')
exports.hanabiGraphql = {
  enable: true,
  // package: 'egg-hanabi-graphql'
  path: path.join(__dirname, '../../../../../')
}
exports.user = {
  enable: true,
  path: path.join(__dirname, '../../../plugins/user')
}
