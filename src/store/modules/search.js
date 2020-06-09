import {reqProductList} from '../../api'

export default {
        state:{
                productList : {}
        },
        mutations :{
                receive_product_list(state,productList){
                        state.productList = productList
                }
        },
        actions:{
                async getProductList({commit},options){
                        const result = await reqProductList(options)
                        if(result.code === 200){
                                const productList = result.data
                                commit('receive_product_list',productList)
                        }
                }
        },
        getters:{
              trademarkList(state){
                    return state.productList.trademarkList  || []
              }  ,
              attrsList(state){
                      return state.productList.attrsList || []
              }
        }
}
