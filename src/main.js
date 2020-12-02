import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import store from './store.js'

import router from './routes.js'

axios.defaults.baseURL = "https://cis410-fa20-jlenny-api.azurewebsites.net";

new Vue({  
  el: '#app',
  router,
  store: store,
  render: h => h(App)
})

