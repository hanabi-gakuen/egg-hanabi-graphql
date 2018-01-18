const mm = require('egg-mock')

describe('closeGraphiql', () => {
  let app

  before(() => {
    app = mm.app({
      baseDir: 'apps/graphiql-app'
    })
    return app.ready()
  })

  after(mm.restore)

  it('should get graphql json response', function* () {
    app.mockHttpclient('/graphql', 'GET', {
      headers: {
        'accept-language': 'zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2',
        Accept: 'text/html',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:57.0) Gecko/20100101 Firefox/57.0'
      }
    })
    return app.httpRequest()
      .get('/graphql')
      .expect('GET query missing.')
  })
})
