import Vue from 'vue'
import Router from 'vue-router'
import Map from '@/components/map/Map'
import Signup from '@/components/auth/Signup'
import Login from '@/components/auth/Login'
import Home from '@/components/Home'
import firebase from "firebase";
import Welcome from '@/components/tutorchat/Welcome'
import Chat from '@/components/tutorchat/Chat'
import ViewProfile from "@/components/profile/ViewProfile";
import WorkSpace from "@/components/workspace/workspace"
import Tag from '@/components/tags/tag'

import Index from '@/components/tags/Index'
import AddTags from '@/components/tags/AddTags'
import EditTag from '@/components/tags/EditTag'

Vue.use(Router);
mode: 'history';
const router = new Router({
  routes: [
    {
      path: '/group',
      name: 'Map',
      component: Map,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/tag',
      name: 'Tag',
      component: Tag,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/workspace',
      name: 'WorkSpace',
      component: WorkSpace,

    },
    {
      path: '/profile/:id',
      name: 'ViewProfile',
      component: ViewProfile,
      meta:{
        requiresAuth:true
      }
    },


    {
      path: '/Welcome',
      name: 'Welcome',
      component: Welcome,
      meta:{
        requiresAuth:true
      }
    },
    {
      path:'/chat',
      name:'Chat',
      component: Chat,
      props: true,
      beforeEnter: (to, from, next) => {
        if(to.params.name){
          next()
        }else{
          next({name: 'Welcome'})
        }
      },
      meta:{
        requiresAuth:true
      }

    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
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
});

router.beforeEach((to, from, next) => {
  if(to.matched.some(rec => rec.meta.requiresAuth)){
    let user = firebase.auth().currentUser;
    if(user){
      next()
    }else{
      next({name: 'Login'})
    }
  }else{
    next()
  }
});

export default router
