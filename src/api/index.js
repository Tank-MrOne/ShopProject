import ajax from './ajax'
import mockAjax from './mockAjax'


export const reqCategoryList = () => ajax('/product/getBaseCategoryList')

export const reqBanners = () => mockAjax('/mock/banners')

export const reqFloors = () => mockAjax('/mock/floors')

export const reqRecommend = () => mockAjax('/mock/recommend')

export function reqProductList(options){
    return ajax({
        url:'/list',
        method:'POST',
        data:options
    })
}

export const reqDetail = (skuId) => ajax(`/item/${skuId}`)

export function reqCart(skuId,skuNum){
    return ajax({
        url:'/cart/addToCart/'+skuId+'/'+skuNum,
        method:'POST'
    })
}

export const reqShopCart = () => ajax.get('/cart/cartList')
export const reqCheckCartItem = (skuId, isChecked) => ajax.get(`/cart/checkCart/${skuId}/${isChecked}`)
export const reqDeleteCartItem = (skuId) => ajax.delete(`/cart/deleteCart/${skuId}`)

//登入
export function reqLogin(mobile,password){
    return ajax({
        url:'/user/passport/login',
        method:'POST',
        data:{
            mobile,password
        }
    })
}

export function reqRegister(userInfo){
    return ajax({
        url:"/user/passport/register",
        method:'POST',
        data:userInfo
    })
}

export const reqLoginQuit = ()=> ajax.get('/user/passport/logout')

export const reqOrders = (page,limit) => ajax(`/order/auth/${page}/${limit}`)

export const reqTradeInfo = ()=> ajax('/order/auth/trade')

export const reqSubmitOrder = (tradeNo,order)=> ajax({
    url: 'order/auth/submitOrder',
    method:'POST',
    params:{
        tradeNo
    },
    data:order
})

export const reqPayInfo = (orderId)=> ajax(`payment/weixin/createNative/${orderId}`)

export const reqPayStatus = (orderId)=> ajax(`payment/weixin/queryPayStatus/${orderId}`)