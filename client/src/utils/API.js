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
    return axios.get('/api/items', query);
  },
  getItems: function () {
    return axios.get('/api/items');
  },
  createStore: function (store) {
    return axios.post('/api/stores', store);
  },
  getUserStores: function (userId) {
    console.log(userId);
    return axios.get('/api/stores', userId);
  }
};
