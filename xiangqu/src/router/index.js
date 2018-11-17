import Vue from 'vue'
import Router from 'vue-router'


import Home from '@/components/Home'
import New from '../components/pages/New'
import Hot from '../components/pages/Hot'
import Find from '../components/pages/Find/Find'
Vue.use(Router)

export default new Router({
  routes: [
  {
      path:'/',
      redirect:'/Find'
    },
    {
      path: '/Find',
      name: 'Find',
      component: Find
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path:'/new',
      name:'New',
      component:New
    },
    {
      path:'/hot',
      name:'Hot',
      component:Hot
    }

  ]
})
