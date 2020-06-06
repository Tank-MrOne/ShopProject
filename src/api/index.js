import ajax from './ajax'

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

export const reqCategorys = () => ajax('/product/getBaseCategoryList')