import {reqCategoryList} from '../../api'

export default {
    state : {
        categroyList:[]
    },

    mutations :{
        receive_category_list(state,categroyList){
            state.categroyList = categroyList
        }
    },

    actions:{
        //发起请求
       async getCategroyList({commit}){
            const result = await reqCategoryList()
            if(result.code === 200){
                const categroyList = result.data.filter((item,index )=>index<15)
                // 
                commit('receive_category_list',categroyList)
            }
        }
    },

    getters:{}
}