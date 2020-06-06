<template>
    <div>
      <Header v-if="!$route.meta.isHide"/>
        <router-view></router-view>
      <Footer v-if="!$route.meta.isHide"/>
    </div>
</template>

<script>

import Header from './components/Header'
import Footer from './components/Footer'
// import {reqCategoryList} from './api'

export default {
  name:'App',
  // async mounted(){
  //   await reqCategoryList()
  // },
  components:{
    Footer,Header
  }
}
</script>

<style lang="less">

</style>

