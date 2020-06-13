import {reqShopCart} from '../../api'

export default {
    state:{
        cartList:[]
    },
    mutations :{
        receive_shopcart_list(state,cartList){
            state.cartList = cartList
        }
    },
    actions:{
        async getShopCartList({commit}){
            const result = await reqShopCart()
            if(result.code === 200){
                const cartList = result.data
                commit('receive_shopcart_list',cartList)
            }
        }, 
    },
    getters:{
         
    }
}
