import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import AddTags from '@/components/AddTags'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/add-tags',
      name: 'AddTags',
      component: AddTags
    }
  ]
})
