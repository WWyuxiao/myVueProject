<template>
  <transition name="move">
    <div v-show="showFlag" class="food" ref="food">
      <div class="food-content">
          <div class="image-header">
              <img :src="food.image">
              <div class="back" @click="hide">
                <i class="icon-arrow_lift"></i>
              </div>
          </div>
          <div class="content">
              <h1 class="title">{{food.name}}</h1>
              <div class="detail">
                  <span class="sell-count">月售{{food.sellCount}}份</span><span class="rating">好评率{{food.rating}}%</span>
              </div>
              <div class="price">
                  <span class="now">￥{{food.price}}</span><span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
              </div>
              <div class="cartcontrol-wrapper">
                  <cartcontrol :food="food"></cartcontrol>
              </div>
              <transition name="addCartMove">
                  <div @click.stop.prevent="addFirst($event)" class="buy" v-show="!food.count || food.count===0">加入购物车</div>
              </transition>
          </div>
          <split v-show="food.info"></split>
          <div class="info" v-show="food.info">
              <h1 class="title">商品信息</h1>
              <p class="text">{{food.info}}</p>
          </div>
          <split></split>
          <div class="rating">
              <h1 class="title">商品评价</h1>
              <ratingselect :select-type="selectType" :only-content="onlyContent" :desc="desc" :ratings="food.ratings" @selRatings="filterRatings" @isContent="isContent"></ratingselect>
              <div class="rating-wrapper">
                  <ul v-show="food.ratings && food.ratings.length">
                      <li v-for="(rating, index) in food.ratings" :key="index" class="rating-item borer-1px">
                          <div class="user">
                              <span class="name">{{rating.username}}</span>
                              <img :src="rating.avatar" class="avatar" width="12" height="12">
                          </div>
                          <div class="time">{{rating.rateTime}}</div>
                          <p class="text">
                              <span :class="{'icon-thumb_up':rating.rateType === 0, 'icon-thumb_down':rating.rateType === 1}">{{rating.text}}</span>
                          </p>
                      </li>
                  </ul>
                  <div class="no-ratings" v-show="!food.ratings || !food.ratings.length"></div>
              </div>
          </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import Vue from 'vue'
  import cartcontrol from '../cartcontrol/cartcontrol'
  import ratingselect from '../ratingselect/ratingselect'
  import split from '../split/split'

//   const POSITIVE = 0
//   const NEGATIVE = 1
  const ALL = 2
  
  export default {
    props: {
      food: {
        type: Object
      }
    },
    data () {
      return {
        showFlag: false,
        selectType: ALL,
        onlyContent: true,
        desc: {
          all: '全部',
          positive: '推荐',
          negative: '吐槽'
        }
      }
    },
    methods: {
      show () {
        this.showFlag = true
        this.selectType = ALL
        this.onlyContent = false
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll(this.$refs.food, {
              click: true
            })
          } else {
            this.scroll.refresh()
          }
        })
      },
      hide () {
        this.showFlag = false
      },
      addFirst (event) { // 商品详情页中第一次添加到购物车
        if (!event._constructed) {
          return
        }
        this.$root.eventHub.$emit('cart-add', event.target)
        Vue.set(this.food, 'count', 1)
      },
      filterRatings (type) { // 获取子组件点击事件传递过来的数据
        this.selectType = type
        this.$nextTick(() => {
          this.scroll.refresh()
        })
      },
      isContent (bool) { // 获取子组件点击事件传递过来的数据
        this.onlyContent = bool
        this.$nextTick(() => {
          this.scroll.refresh()
        })
      }
    },
    components: {
      cartcontrol,
      split,
      ratingselect
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"

  .food
    position: fixed
    left: 0
    top: 0
    bottom: 48px
    z-index: 30
    width: 100%
    background: #fff
    transform: translate3d(0, 0, 0)
    &.move-enter-active, &.move-leave-active
      transition: all 0.2s linear
    &.move-enter-active
      transform: translate3d(0, 0, 0)
    &.move-enter, &.move-leave-to
      transform: translate3d(100%, 0, 0)
    .image-header
      position: relative
      width: 100%
      height: 0
      padding-top: 100%
      img
        position: absolute
        left: 0
        top: 0
        width: 100%
        height: 100%
      .back
        position: fixed
        top: 10px
        left: 0
        .icon-arrow_lift
          display: block
          padding: 10px
          font-size: 20px
          color: #fff
    .content
      position: relative
      padding: 18px
      .title
        line-height: 14px
        margin-bottom: 8px
        font-size: 14px
        font-weight: 700
        color: rgb(7, 17, 27)
      .detail
        margin-bottom: 18px
        height: 10px
        line-height: 10px
        font-size: 0
        .sell-count, .rating
          font-size: 10px
          color: rgb(147, 153, 159)
        .sell-count
          margin-right: 12px
      .price
        font-weight: 700
        line-height: 24px
        .now
          margin-right: 8px
          font-size: 14px
          color: rgb(240, 20, 20)
        .old
          text-decoration: line-through
          font-size: 10px
          color: rgb(147, 153, 159)
      .cartcontrol-wrapper
        position: absolute
        right: 12px
        bottom: 12px
      .buy
        position: absolute
        right: 18px
        bottom: 18px
        z-index: 10
        height: 24px
        line-height: 24px
        padding: 0 12px
        box-sizing: border-box
        border-radius: 12px
        font-size: 10px
        color: #fff
        background: rgb(0, 160, 220)
        &.addCartMove-enter-active, &.addCartMove-leave-active
          transition: all 0.2s
        &.addCartMove-enter-active
          opacity: 1
        &.addCartMove-enter, &.addCartMove-leave-to
          opacity: 0
    .info
      padding: 18px
      .title
        line-height: 14px
        margin-bottom: 6px
        font-size: 14px
        color: rgb(7, 17, 27)
      .text
        line-height: 24px
        padding: 0 8px
        font-size: 12px
        font-weight: 200
        color: rgb(77, 85, 93)
    .rating
      padding-top: 18px
      .title
        line-height: 14px
        margin-left: 18px
        font-size: 14px
        color: rgb(7, 17, 27)
      .rating-wrapper
        padding: 0 18px
        .rating-item
          position: relative
          padding: 16px 0
          border-1px(rgba(7, 17, 27, 0.1))
          .user
            position: absolute 
            right: 0
            top: 16px
            line-height: 12px
            font-size: 0
            .name
              display: inline-block
              margin-right: 6px
              vertical-align: top
              font-size: 10px
              color: rgb(147, 153, 159)
            .avatar
              border-radius: 50%
          .time
            margin-bottom: 6px
            line-height: 12px
            font-size: 10px
            color: rgb(147, 153, 159)
          .text
            line-height: 16px
            font-size: 12px
            color: rgb(7, 17, 27)
            .icon-thumb_up,.icon-thumb_down
              margin-right: 4px
              line-height: px
              font-size: 12px
            .icon-thumb_up
              color: rgb(0, 160, 220)
            .icon_thumb_down
              color: rgb(147, 153, 159)
</style>
