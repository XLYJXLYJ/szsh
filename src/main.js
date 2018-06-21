import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Mint from 'mint-ui'
import 'lib-flexible/flexible.js'//移动端rem

Vue.use(Mint);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
