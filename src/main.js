import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './mock/mokeServer'

import TypeNav from './components/TypeNav'
import Carousel from './components/Carousel'
Vue.component('TypeNav',TypeNav)
Vue.component('Carousel',Carousel)

new Vue({
  el:"#app",
  render: h => h(App),
  router,
  store
})
