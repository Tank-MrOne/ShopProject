module.exports = {
    lintOnSave : false,  		// 全部关闭（二选一）
    devServer:{
        proxy:{
            '/api':{
                target:"http://182.92.128.115",
                changeOrigin:true,
            }
        }
    }
}