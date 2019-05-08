import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import AddTags from '@/components/AddTags'
import EditTag from '@/components/EditTag'

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
    },
    {
      path: '/edit-tag/:tag_slug',
      name: 'EditTag',
      component: EditTag
    }
  ]
})
