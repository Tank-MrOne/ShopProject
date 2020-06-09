<template>
    <div>
        
        <TypeNav/>
        <ListContainer/>
        <Recommend/>
        <Rank/>
        <Like/>
        <Floor/>
        <Floor/>
        <Brand/>
    </div>
</template>

<script>

import ListContainer from '@/views/Home/ListContainer/ListContainer'
import Recommend from '@/views/Home/Recommend/Recommend'
import Rank from '@/views/Home/Rank/Rank'
import Like from '@/views/Home/Like/Like'
import Floor from '@/views/Home/Floor/Floor'
import Brand from '@/views/Home/Brand/Brand'

export default {
    name:"Home",
    mounted() {
        this.$store.dispatch('getBanners')
    },
    components:{
        ListContainer,
        Recommend,
        Rank,
        Like,
        Floor,
        Brand
    }
}
</script>

<style lang="less" scoped>

</style>