import Vue from 'vue'
import Vuex from 'vuex'

import home from '@/store/modules/home'
import users from '@/store/modules/users'
import search from '@/store/modules/search'
import detail from '@/store/modules/detail'
import shopcart from '@/store/modules/shopCart'
import order from '@/store/modules/order'

Vue.use(Vuex)

const mutations = {}
const actions = {}
const getters = {}

export default new Vuex.Store({
    mutations,
    actions,
    getters,
    modules:{
        home,users,search,detail,shopcart,order
    }
})