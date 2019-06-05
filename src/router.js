import Vue from 'vue'
import Router from 'vue-router'
import Year from '@/views/year'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'year',
      component: Year
    },
  ]
})