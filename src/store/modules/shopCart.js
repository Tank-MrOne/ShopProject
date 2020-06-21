import { reqShopCart, reqCheckCartItem, reqDeleteCartItem } from '../../api'
// import { delete } from 'vue/types/umd'

export default {
    state: {
        cartList: []
    },
    mutations: {
        receive_shopcart_list(state, cartList) {
            state.cartList = cartList
        }
    },
    actions: {
        async getShopCartList({ commit }) {
            const result = await reqShopCart()
            if (result.code === 200) {
                const cartList = result.data
                commit('receive_shopcart_list', cartList)
            }
        },
        async reqCheckCartItem({comit},{skuId,isChecked}){
            const result = await reqCheckCartItem(skuId,isChecked)
            if (result.code !== 200) {
                throw new Error(result.message || '勾选商品失败')
            }
        },
        async checkAllCartItems({commit,state,dispatch},checked){
            const isChecked = checked ? "1" : "0"
            let promises = []
            state.cartList.forEach(item => {
                if(item.isChecked != isChecked){
                    const promise = dispatch('reqCheckCartItem',{skuId:item.skuId,isChecked})
                    promises.push(promise)
                }
            });
            return Promise.all(promises)
        },
        async deleteCartItem(context,skuId){
            const result = await reqDeleteCartItem(skuId)
            if(result.code !== 200){
                throw new Error('删除商品失败')
            }
        },
        async deleteCheckedCartItems({state,dispatch}){
            const promises = state.cartList.reduce((pre,item) => {
                if(item.isChecked === 1){
                    pre.push(dispatch('deleteCartItem',item.skuId))
                }
                return pre
            },[])

            return Promise.all(promises)
        }
    },
    getters: {
        cartList(state) {
            return state.cartList || []
        },
        totalCount(state) {
            return state.cartList.reduce((preTotal, item) => preTotal + (item.isChecked === 1 ? item.skuNum : 0), 0)
        },
        totalPrice(state) {
            return state.cartList.reduce((preTotal, item) => preTotal + item.skuNum * item.cartPrice, 0)
        },
        isChecked(state) {
            return state.cartList.length>0 && state.cartList.every((item, index) => item.isChecked === 1)
        }
    }
}
