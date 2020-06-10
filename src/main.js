import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './mock/mokeServer'

import TypeNav from './components/TypeNav'
import Carousel from './components/Carousel'
import Pagination from './components/Pagination'
Vue.component('TypeNav',TypeNav)
Vue.component('Carousel',Carousel)
Vue.component('Pagination',Pagination)

new Vue({
  el:"#app",
  render: h => h(App),
  router,
  store
})
