import Vue from 'vue'
import Router from 'vue-router'


import Home from '@/components/Home'
import New from '../components/pages/New'
import Hot from '../components/pages/Hot'
import Find from '../components/pages/Find/Find'
import Details from '../components/pages/Details'
import Search from '../components/pages/Search/Search'
// import TasteNav from '../components/common/TasteNav'
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
      path:'/details/:id',
      name:'Details',
      component:Details,
      props:true
    },
    {
      path:'/Search',
      name:'Search',
      component:Search
    }
    // {
    //   path:'/tastenav',
    //   name:'TasteNav',
    //   component:TasteNav
    // }

  ]
})
