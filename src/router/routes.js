import Home from '../views/Home'
import Search from '../views/Search'
import Register from '../views/Register'
import Login from '../views/Login'
import Detail from '../views/Detail'
import AddCartSuccess from '../views/AddCartSuccess'
import ShopCart from '../views/ShopCart'

export default[
    {
        path:'/',
        component:Home
    },
    {
        path:'/search/:value?',
        component:Search,
        name :'search'
        // props:route => ({
        //     value3 : "测试第3个值",
        //     value4 : "测试第4个值"
        // })
    },
    {
        path:'/register',
        component:Register,
        meta:{
            isHide:true
        }
    },
    {
        path:'/login',
        component:Login,
        meta:{
            isHide:true
        }
    },
    {
        path:'/detail/:id',
        component:Detail
    },
    {
        path:'/addcartsuccess',
        component:AddCartSuccess
    },
    {
        path:'/shopcart',
        component:ShopCart
    }
]