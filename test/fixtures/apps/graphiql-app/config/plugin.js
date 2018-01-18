const path = require('path')
exports.hanabiGraphql = {
  enable: true,
  // package: 'egg-hanabi-graphql'
  path: path.join(__dirname, '../../../../../')
}
exports.token = {
  enable: true,
  path: path.join(__dirname, '../../../plugins/token')
}
