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

export default {
  name:'App',
  components:{
    Footer,Header
  },
  async mounted() {
    this.$store.dispatch('getCategroyList');
  },
}
</script>

<style lang="less">

</style>

