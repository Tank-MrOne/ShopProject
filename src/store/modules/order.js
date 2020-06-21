import { reqTradeInfo, reqPayInfo } from "../../api"

export default {
    state :{
        tradeInfo:{},
        payInfo:{}
    },
    mutations:{
        receive_trade_info(state,tradeInfo){
            state.tradeInfo = tradeInfo
        },
        receive_pay_info(state,payinfo){
            state.payInfo = payinfo
        }
    },
    actions:{
        async getTradeInfo({commit}){
            const result = await reqTradeInfo()
            if(result.code === 200){
                const tradeInfo = result.data
                commit('receive_trade_info',tradeInfo)
            }
        },
        async getPayInfo({commit},orderId){
            const result = await reqPayInfo(orderId)
            if(result.code === 200){
                const payInfo = result.data
                commit('receive_pay_info',payInfo)
            }
        }
    },
    getters:{

    }
}