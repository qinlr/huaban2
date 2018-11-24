// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '../node_modules/animate.css/animate.css'
import './styles/common/reset.less'
import Vue from 'vue'
import App from './App'

import router from './router/index.js'
import store from './store/index.js'

//引入axios
import Axios from 'axios'
//请求拦截
Axios.defaults.retry = 4;
Axios.defaults.retryDelay = 1000;
Axios.interceptors.response.use(function(response){
  return response.data;

}, function axiosRetryInterceptor(err) {
  var config = err.config;
  // If config does not exist or the retry option is not set, reject
  if(!config || !config.retry) return Promise.reject(err);

  // Set the variable for keeping track of the retry count
  config.__retryCount = config.__retryCount || 0;

  // Check if we've maxed out the total number of retries
  if(config.__retryCount >= config.retry) {
      // Reject with the error
      return Promise.reject(err);
  }

  // Increase the retry count
  config.__retryCount += 1;

  // Create new promise to handle exponential backoff
  var backoff = new Promise(function(resolve) {
      setTimeout(function() {
          resolve();
      }, config.retryDelay || 1);
  });

  // Return the promise in which recalls axios to retry the request
  return backoff.then(function() {
      return axios(config);
  });
});

// Axios.interceptors.response.use(function(response){
//   return response.data;

// },function(error){
//   return Promise.reject(error);
// });

Vue.prototype.$axios=Axios;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,store,
  components: { App },
  template: '<App/>'
})
