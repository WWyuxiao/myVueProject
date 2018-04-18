# vue2.x仿外卖APP项目总结
├──APP.vue
  │  ├──Header.vue--头部组件
  │  │  ├──iconClassMap--图标组件（减，折，特，票，保）
  │  │  ├──Star.vue--星星评分组件
  │  ├──Goods.vue--商品组件
  │  │  ├──iconClassMap--图标组件（减，折，特，票，保）
  │  │  ├──Shopcart.vue--购物车组件,包括小球飞入购物车动画,使用this.\$root.eventHub.\$on('cart.add', this.drop)接收，并给drop方法使用
  │  │  ├──CartControl.vue--购买控件--选中数量返回给父组件goods，goods响应后，重新计算选中数量，并用this.\$root.eventHub.\$emit（'name',event.target）将数据发送给购物车组件，
  │  │  ├──Foodinfo.vue--商品详情页
  │  │  │  ├──RatingSelect.vue--评价内容筛选组件    
  │  ├──Ratings.vue--评论组件
  │  │  ├──RatingSelect.vue--评价内容筛选组件
  │  ├──Seller.vue--商家组件
  │  │  ├──iconClassMap--图标组件（减，折，特，票，保）

独立组件
  ├──iconClassMap--图标组件（减，折，特，票，保）
  ├──split.vue--关于分割线组件
  ├──RatingSelect.vue--评价内容筛选组件

