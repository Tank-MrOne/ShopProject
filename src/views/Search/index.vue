<template>
    <div>
        接收的params参数是:{{$route.params.value}}
        接收的query参数是:{{$route.query.valueq}}
        接收的query参数是:{{value3}}
        接收的query参数是:{{value4}}
    </div>
</template>

<script>


export default {
    name:"Search",
    props:['value3','value4']
}
</script>

<style lang="less" scoped>

</style>