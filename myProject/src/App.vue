<template>
  <div>
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from './components/header/header'
  import {urlParse} from './common/js/util'
  
  const ERR_OK = 0

  export default {
    data () {
      return {
        seller: {
          id: (() => {
            let queryParam = urlParse()
            return queryParam.id
          })()
        }
      }
    },
    created () {
      this.$http.get('/api/seller?id=' + this.seller.id).then(response => {
        response = response.body // 获取数据，object类型
        // 判断是否成功拿到了数据
        if (response.errno === ERR_OK) {
          // 成功获取到数据，之后子组件header使用props接收数据，header组件进行渲染
          // this.seller = response.data // 直接赋值id会丢失，this.seller.id = undefined
          this.seller = Object.assign({}, this.seller, response.data) // 对象合并
          // console.log(this.seller)
        }
      }, response => {
        // error callback
      })
    },
    components: {
      'v-header': header
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import './common/stylus/mixin.styl'


  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    border-1px(rgba(77, 17, 27, 0.1))
    .tab-item
      flex: 1
      text-align: center
      & > a
       display: block
       font-size: 14px
       color: rgb(77, 85, 93)
       &.active
         color: rgb(240, 20, 20)
</style>
