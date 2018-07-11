import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/page/index/index'
import Find from '@/page/find/find'
import Order from '@/page/order/order'
import Mine from '@/page/mine/mine'


Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
    	path:"/find",
    	name:'find',
    	component:Find
    },
    {
    	path:"/order",
    	name:'order',
    	component:Order
    },
    {
    	path:"/mine",
    	name:'mine',
    	component:Mine
    }
  ]
})
