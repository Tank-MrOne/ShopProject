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