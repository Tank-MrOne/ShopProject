<template>
  <div class="swiper-container" ref="swiper">
    <div class="swiper-wrapper">
      <div v-for="(item, index) in carouseList" :key="item.id" class="swiper-slide">
        <img :src="item.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import Swiper from "swiper";

export default {
  name: "Carousel",
  props: {
    carouseList: Array,
    autoplay: Boolean
  },
//   mounted() {
//      if (this.carouseList.length>0) { // 已经显示了
//       this.srollImg() // 立即创建swiper, 不需要用什么nextTick()/定时器
//     }     
//   },
  watch: {
    carouselList: {
      // 监视的回调
      handler(value) {
        if (this.carouseList.length === 0) return;
        this.$nextTick(() => {
          this.srollImg();
        })
        
      },
      immediate: true
    }
  },
  methods: {
    srollImg() {
      new Swiper(this.$refs.swiper, {
        // new Swiper ('.swiper-container', {
        loop: true, // 循环模式选项
        autoplay: this.autoplay,
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination"
        },

        // 如果需要前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      });
    }
  }
};
</script>



<style scoped>
</style>