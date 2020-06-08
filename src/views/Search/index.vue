<template>
    <div>
        <TypeNav/>
        接收的params参数是:{{$route.params.value}} <br>
        接收的query参数是:{{$route.query.catagoryName}} <br>
        接收的query参数是:{{$route.query.category1Id}} <br>
        接收的query参数是:{{$route.query.category2Id}}} <br>
        接收的query参数是:{{$route.query.category3Id}}} <br>
    </div>
</template>

<script>
import TypeNav from '../../components/TypeNav'

export default {
    name:"Search",
    comments:{
        TypeNav
    }
}
</script>

<style lang="less" scoped>

</style>