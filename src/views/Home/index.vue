<template>
    <div>
        
        <TypeNav/>
        <ListContainer/>
        <Recommend/>
        <Rank/>
        <Like/>
        <Floor v-for="(floor, index) in floors" :key="floor.id" :floor="floor"/>
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
import {mapState} from 'vuex'
export default {
    name:"Home",
    mounted() {
        this.$store.dispatch('getBanners')
        this.$store.dispatch('getFloors')
    },
    computed: {
        ...mapState({
            floors : state => state.home.floors
        })
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