import axios from 'axios'

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  getSearch: function (query) {
    return axios.get('/api/items', { query: { name: query.name } })
  },
  getItems: function () {
    return axios.get('/api/items')
  }
}
