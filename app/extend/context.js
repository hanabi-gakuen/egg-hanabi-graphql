/**
 * Inspired by eggjs/egg-graphql
 */

let connectors = null

module.exports = {

  /**
   * connector instance
   * @member Context#connector
   */

  get connector() {
    if (!connectors) {
      connectors = {}
      for (const [type, Class] of this.app.connector) {
        connectors[type] = new Class(this)
      }
    }
    return connectors
  },

  /**
   * graphql instance access
   * @member Context#graphql
   */

  get graphql() {
    return this.service.graphql
  }
}
