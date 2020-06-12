import {reqDetail} from '../../api'

export default {
        state:{
                detailItem : {}
        },
        mutations :{
                receive_detail(state,detailItem){
                        state.detailItem = detailItem
                }
        },
        actions:{
                async getDetail({commit},detailItem){
                        const result = await reqDetail(detailItem)
                        if(result.code === 200){
                                const detailItem = result.data
                                commit('receive_detail',detailItem)
                        }
                }
        },
        getters:{
                skuInfo(state){
                        return state.detailItem.skuInfo ? state.detailItem.skuInfo : {}
                }

        }
}
