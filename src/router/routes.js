import Home from '../views/Home'
import Search from '../views/Search'
import Register from '../views/Register'
import Login from '../views/Login'

export default[
    {
        path:'/',
        component:Home
    },
    {
        path:'/search/:value',
        component:Search,
        name :'search'
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
]