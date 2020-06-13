import ajax from './ajax'
import mockAjax from './mockAjax'
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