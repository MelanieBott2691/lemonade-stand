import axios from 'axios';

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  register: function (user) {
    return axios.post('/api/register', user);
  },
  login: function (user) {
    return axios.post('/api/login', user);
  },
  getSearch: function (query) {
    return axios.post('/api/search', query);
  },
  getItems: function () {
    return axios.get('/api/items');
  },
  createItem: function (item) {
    return axios.post('/api/items', item);
  },
  getUserStores: function (userId) {
    return axios.get('/api/stores', userId);
  },
  getUser: function (userId) {
    return axios.get('/api/users/' + userId);
  }
};
