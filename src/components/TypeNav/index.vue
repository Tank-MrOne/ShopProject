<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="hideCate" @mouseenter="showCate">
        <h2 class="all">全部商品分类</h2>
        <transition name="hidden">
            <div class="sort"  v-show="isShow">
            <div class="all-sort-list2"  @click="toSearch" >
                <div class="item" :class="{item_on:index === currentIndex}" v-for="(c1,index) in categroyList" @mouseenter="showSubScategorys(index)" :key="c1.categoryId">
                <h3>
                    <a href="javascript:;" :data-categoryname="c1.categoryName" :data-category1id="c1.categoryId">{{c1.categoryName}}</a>
                </h3>
                <div class="item-list clearfix">
                    <div class="subitem">
                    <dl v-for="c2 in c1.categoryChild" :key="c2.categoryId" class="fore">
                        <dt>
                        <a href :data-categoryname="c2.categoryName" :data-category2id="c2.categoryId">{{c2.categoryName}}</a>
                        </dt>
                        <dd>
                        <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                            <a href="javascript:;" :data-categoryname="c3.categoryName" :data-category3id="c3.categoryId">{{c3.categoryName}}</a>
                        </em>
                        </dd>
                    </dl>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </transition>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
import throttle  from "lodash/throttle"
export default {
    data() {
        return {
            currentIndex:-1,
            isShow : this.$route.path === '/'
        }
    },
    computed:{
        // 常规写法
        categroyList(){
            return this.$store.state.home.categroyList
        },

        // ...map语法
        // ...mapState({
        //     categroyList:state => state.home.categroyList
        // })
    },
    // mounted(){
    //     // 常规写法
    //     // this.$store.dispatch('getCategroyList')

    //     // ...map语法
    //     this.getCategroyList()
    // },
    methods:{
        ...mapActions(['getCategroyList']),
        showSubScategorys:throttle(function (index){
            if(this.currentIndex!==-2){
                this.currentIndex = index
            }
        },200),
        
        hideCate(){
            this.currentIndex = -2
            if (this.$route.path!=='/') {
                this.isShow = false
            }
        },
        toSearch(event){
            const {
                categoryname,
                category1id,
                category2id,
                category3id
            } = event.target.dataset

            if(!categoryname) return

            const query = {
                categoryName : categoryname
            }
            if(category1id){
                query.category1Id = category1id
            }else if(category2id){
                query.category2Id = category2id
            }else if(category3id){
                query.category3Id = category3id
            }

            const location = {
                name : "search",
                query
            }
            const value = this.$route.params.value
            if(value){
                location.params = {value}
            }
            this.$router.push(location)
            this.hideCate()
        },
        showCate(){
            this.isShow = true
            this.currentIndex=-1
        }
    }
}
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

        &.hidden-enter-active{
            transition: all .3s;
        }
        &.hidden-enter,&.hidden-leave-to{
            opacity: 0;
            height: 0;
        }
      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &.item_on {
            background-color: #bfa;
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>