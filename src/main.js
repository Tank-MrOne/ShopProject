import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './validate'
import './mock/mokeServer'
import * as API from './api'
import TypeNav from './components/TypeNav'
import Carousel from './components/Carousel'
import Pagination from './components/Pagination'
import './elements'
import vuelazyload from 'vue-lazyload'
import loading from './assets/loading.gif'
Vue.use(vuelazyload,{
  loading
})

Vue.component('TypeNav',TypeNav)
Vue.component('Carousel',Carousel)
Vue.component('Pagination',Pagination)

Vue.prototype.$API = API

new Vue({
  el:"#app",
  render: h => h(App),
  router,
  store,
  beforeCreate(){
    Vue.prototype.$bus = this
  }
})
