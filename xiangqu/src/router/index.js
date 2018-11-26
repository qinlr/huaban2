import Vue from 'vue'
import Router from 'vue-router'


import Home from '@/components/Home'
import New from '../components/pages/New'
import Hot from '../components/pages/Hot'
import Find from '../components/pages/Find/Find'
import Details from '../components/pages/Details'
import Search from '../components/pages/Search/Search'
import Drawing from '../components/pages/Find/Drawing'
import Interest from '../components/pages/Find/Interest'
import Login from '../components/pages/My/Login'
import Reg from '../components/pages/My/Reg'
import TasteNav from '../components/common/TasteNav'
Vue.use(Router)

Vue.config.productionTip = false

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
      path:'/details',
      name:'Details',
      component:Details,
      props:true
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
        path: '/Interest',
          name: 'Interest',
          component: Interest
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
        },
    {
      path:'/TasteNav',
      name:'TasteNav',
      component:TasteNav
    }

  ]
})
