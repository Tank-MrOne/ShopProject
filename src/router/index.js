import Vue from "vue"
import VueRouter from "vue-router"
import routes from './routes'


Vue.use(VueRouter)


let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.push

VueRouter.prototype.push = function(location,onComplete,onAbort){
    if(!onComplete && !onAbort){
        return originPush.call(this,location).catch(err =>{
            console.log(err.message);        
        })
    }else{
        originPush.call(this,location,onComplete,onAbort)
    }
}

VueRouter.prototype.replace = function(location,onComplete,onAbort){
    if(!onComplete && !onAbort){
        return originReplace.call(this,location).catch(err =>{
            console.log(err.message);        
        })
    }else{
        originReplace.call(this,location,onComplete,onAbort)
    }
}

export default new VueRouter({
    mode:'history',
    routes,
    scrollBehavior(to,from,savadPosition){
        return {x : 0 ,y : 0}
    }
})