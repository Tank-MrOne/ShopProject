// import Home from '../views/Home'
// import Search from '../views/Search'

const Home = () => import('../views/Home')
const Search = () => import('../views/Search')
const Detail = () => import('../views/Detail')
import Register from '../views/Register'
import Login from '../views/Login'
// import Detail from '../views/Detail'
import AddCartSuccess from '../views/AddCartSuccess'
import ShopCart from '../views/ShopCart'
import Trade from '../views/Trade'
import Pay from '../views/Pay'
import PaySuccess from '../views/PaySuccess'
import Center from '../views/Center'
import MyOrder from '../views/Center/MyOrder'
import GroupBuy from '../views/Center/GroupBuy'

import store from '../store'

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
        },
        beforeEnter: (to, from, next) => {
            const token = store.state.users.userInfo.token
            if(token){
                next('/')
            }else{
                next()
            }
        }
    },
    {
        path:'/detail/:id',
        component:Detail
    },
    {
        path:'/addcartsuccess',
        component:AddCartSuccess,
        beforeEnter: (to, from, next) => {
            const skuNum = to.query.skuNum
            const skuInfo = JSON.parse(window.sessionStorage.getItem('skuInfo'))
            if(skuNum && skuInfo instanceof Object){
                next()
            }else{
                next('/shopcart')
            }
        }
    },
    {
        path:'/shopcart',
        component:ShopCart
    },
    {
        path:'/trade',
        component:Trade,
        beforeEnter: (to, from, next) => {
            if(from.path==='/shopcart'){
                next()
            }else{
                next('/shopcart')
            }
        }
    },
    {
        path:'/pay',
        component:Pay,
        beforeEnter: (to, from, next) => {
            if(from.path==='/trade'){
                next()
            }else{
                next('/trade')
            }
        }
    },
    {
        path:'/paysuccess',
        component:PaySuccess,
        beforeEnter: (to, from, next) => {
            if(from.path==='/pay'){
                next()
            }else{
                next('/pay')
            }
        }
    },
    {
        path:'/center',
        component:Center,
        children:[
            {
                path:'/center/myorder',
                component:MyOrder
            },
            {
                path:'groupbuy',
                component:GroupBuy
            },
            {
                path:'',
                redirect:'/center/myorder'
            }
        ]
    },
    {
        path: '/communication',
        component: () => import('@/views/Communication/Communication'),
        children: [
          {
            path: 'event',
            component: () => import('@/views/Communication/EventTest/EventTest'),
            meta: {
              isHideFooter: true
            },
          },
          {
            path: 'model',
            component: () => import('@/views/Communication/ModelTest/ModelTest'),
            meta: {
              isHideFooter: true
            },
          },
          {
            path: 'sync',
            component: () => import('@/views/Communication/SyncTest/SyncTest'),
            meta: {
              isHideFooter: true
            },
          },
          {
            path: 'attrs-listeners',
            component: () => import('@/views/Communication/AttrsListenersTest/AttrsListenersTest'),
            meta: {
              isHideFooter: true
            },
          },
          {
            path: 'children-parent',
            component: () => import('@/views/Communication/ChildrenParentTest/ChildrenParentTest'),
            meta: {
              isHideFooter: true
            },
          },
          {
            path: 'scope-slot',
            component: () => import('@/views/Communication/ScopeSlotTest/ScopeSlotTest'),
            meta: {
              isHideFooter: true
            },
          }
        ],
      },
]