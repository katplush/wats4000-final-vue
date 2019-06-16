import Vue from 'vue'
import Router from 'vue-router'
import Year from '@/views/year'
import Trivia from '@/views/trivia'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'trivia',
      component: Trivia
    },
    {
      path: '/year',
      name: 'year',
      component: Year
    }
  ]
})