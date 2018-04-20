// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './common/stylus/index.styl'

// 关闭生产模式下给出的提示
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  data: {
    eventHub: new Vue() // 给data添加一个名字为eventHub的空对象，用来传输非父子组件的数据
  }
})

 router.push('/goods')
