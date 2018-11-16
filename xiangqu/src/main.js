// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '../node_modules/animate.css/animate.css'
import './styles/common/reset.less'
import Vue from 'vue'
import App from './App'

import router from './router/index.js'

//引入axios
import Axios from 'axios'
//请求拦截
Axios.interceptors.response.use(function(response){
  return response.data;

},function(error){
  return Promise.reject(error);
});

Vue.prototype.$axios=Axios;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
