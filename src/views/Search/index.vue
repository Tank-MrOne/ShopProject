<template>
    <div>
        <TypeNav/>
        接收的params参数是:{{$route.params.value}}
        接收的query参数是:{{$route.query.valueq}}
        接收的query参数是:{{value3}}
        接收的query参数是:{{value4}}
    </div>
</template>

<script>
import TypeNav from '../../components/TypeNav'

export default {
    name:"Search",
    props:['value3','value4'],
    comments:{
        TypeNav
    }
}
</script>

<style lang="less" scoped>

</style>