import Vue from 'vue'//vue实例
import Vuex from 'vuex' //vue router



Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    list_id:window.localStorage.getItem('login')?window.localStorage.getItem('login'):false,
    sliderShow:false,
    login:window.localStorage.getItem('login')?window.localStorage.getItem('login'):false,
    sliderShow:false,
    headertitle:'发现',
    navShow:false,
    search:''
  },
  mutations:{
    //更改state 里的数据的方法
    changeLogin(state,val1){
      console.log(val1)
      state.login=val1
    },
    changeSliderShow(state,val){
     state.sliderShow=val
    },
    changehdtitle(state,val){
      state.headertitle=val
    },
    changenavShow(state,val){
      state.navShow=val
    },
    changeSearch(state,val){
      state.search=val
    }
  }
})