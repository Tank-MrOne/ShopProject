import {reqDetail,reqCart} from '../../api'

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
                },
                async toAddCart({commit},{skuId,skuNum,callback}){
                        const result = await reqCart(skuId,skuNum)
                        if(result.code === 200){
                                callback(true)
                        }else{
                                callback(false)
                        }
                },
                async toAddCart2({commit},{skuId,skuNum}){
                        const result = await reqCart(skuId,skuNum)
                        if(result.code !== 200){
                                throw new Error('商品修改失败')
                        }
                }
        },
        getters:{
                skuInfo(state){
                        return state.detailItem.skuInfo ? state.detailItem.skuInfo : {}
                },
                skuImage(state){
                        const skuInfo = state.detailItem.skuInfo
                        
                        return skuInfo ? skuInfo.skuImageList : []
                }

        }
}
