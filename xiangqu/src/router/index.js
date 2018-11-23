import Vue from 'vue'
import Router from 'vue-router'


import Home from '@/components/Home'
import New from '../components/pages/New'
import Hot from '../components/pages/Hot'
import Find from '../components/pages/Find/Find'
import Search from '../components/pages/Search/Search'
import Drawing from '../components/pages/Find/Drawing'
import Login from '../components/pages/My/Login'
import Reg from '../components/pages/My/Reg'
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
      path:'/New',
      name:'New',
      component:New
    },
    {
      path:'/Hot',
      name:'Hot',
      component:Hot
    },
    {
      path:'/Search',
      name:'Search',
      component:Search
    },
    { 
      path: '/Drawing',
        name: 'Drawing',
        component: Drawing
      },
      { 
        path: '/Login',
          name: 'Login',
          component: Login
        },
      { 
        path: '/Reg',
          name: 'Reg',
          component: Reg
        }

  ]
})
