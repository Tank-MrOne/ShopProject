import Vue from 'vue'
import Vuex from 'vuex'

import home from '@/store/modules/home'
import users from '@/store/modules/users'
import search from '@/store/modules/search'

Vue.use(Vuex)

const mutations = {}
const actions = {}
const getters = {}

export default new Vuex.Store({
    mutations,
    actions,
    getters,
    modules:{
        home,users,search
    }
})