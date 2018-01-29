# egg-hanabi-graphql

graphql plugin for hanabi

## Install
Recommend to install by path

## Usage

```js
// {app_root}/config/plugin.js
exports.hanabiGraphql = {
  enable: true,
  package: 'egg-hanabi-graphql',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.hanabiGraphql = {
  router: '/graphql',
  path: '/graphql',
  graphiql: true
};
```
App will load graphql files from [load unit](https://eggjs.org/en/advanced/loader.html#loadunit) + `path` like `app.basedir + '/graphql'`.
`router` is the path to access it via request.


## License

[MIT](LICENSE)
