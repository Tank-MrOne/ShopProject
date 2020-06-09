import {reqCategoryList, reqBanners,reqFloors,reqRecommend} from '../../api'

export default {
    state : {
        categroyList:[],
        banners:[],
        floors:[],
        recommend:[]
    },

    mutations :{
        receive_category_list(state,categroyList){
            state.categroyList = categroyList
        },
        receive_banners(state,banners){
            state.banners = banners
        },
        receive_floors(state,floors){
            state.floors = floors
        },
        receive_recommend_list(state,recommend){
            state.recommend = recommend
        }
    },

    actions:{
       async getCategroyList({commit}){
            const result = await reqCategoryList()
            if(result.code === 200){
                const categroyList = result.data.filter((item,index )=>index<15)
                // 
                commit('receive_category_list',categroyList)
            }
        },
        async getFloors({commit}){
            const result = await reqFloors()
            if(result.code === 200){
                const floors = result.data
                commit('receive_floors',floors)
            }
        },
        async getBanners({commit}){
            const result = await reqBanners()
            if(result.code === 200){
                const banners = result.data
                commit('receive_banners',banners)
            }
        },
        async getRecommend({commit}){
            const result = await reqRecommend()
            if(result.code === 200){
                const recommend = result.data
                commit('receive_recommend_list',recommend)
            }
        }
    },

    getters:{}
}

