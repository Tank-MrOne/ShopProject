import {reqLogin,reqRegister,reqLoginQuit} from '../../api'
export default {
    state : {
        userInfo:getUserInfo(),
        userTempId:getUserTempId()
    },
    mutations :{
        receive_userinfo(state,userInfo){
            state.userInfo = userInfo
        },
        reset_userinfo(state){
            state.userInfo = {}
        }
    },
    actions:{
        async register({commit},userInfo){
            const result = await reqRegister(userInfo)
            if(result.code !== 200){
                throw new Error(result.data || "注册失败")
            }
        },
        async login({commit},{mobile,password}){
            const result = await reqLogin(mobile,password)
            if(result.code === 200){
                const userInfo = result.data
                commit('receive_userinfo',userInfo)
                saveUserInfo(userInfo)
            }else{
                throw new Error(result.message || "登入失败")
            }
        },
        async quit({commit}){
            const result = await reqLoginQuit()
            if(result.code === 200){
                commit('reset_userinfo')
                removeUserInfo()
            }else{
                throw new Error(result.message || "退出失败")
            }
        },
    },
    getters:{}
}


import { v4 as uuidv4 } from 'uuid'
function getUserTempId(){
    let userTempId = localStorage.getItem('user_temp_id_key')
    if(!userTempId){
        userTempId = uuidv4()
        localStorage.setItem('user_temp_id_key',userTempId)
    }    
    return userTempId
}

function saveUserInfo(userInfo){
    window.localStorage.setItem('user_info_key',JSON.stringify(userInfo))
}

function getUserInfo(userInfo){
    return JSON.parse(window.localStorage.getItem('user_info_key')) || {}
}

function removeUserInfo(){
    window.localStorage.removeItem('user_info_key')
}
