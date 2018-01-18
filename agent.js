module.exports = agent => {
  agent.graphql = require('./lib/graphqlCreate')(agent.config, agent)
}
