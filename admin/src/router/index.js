import Vue from 'vue'
import Router from 'vue-router'
import Map from '@/components/map/Map'
import Signup from '@/components/auth/Signup'
import Login from '@/components/auth/Login'
import Home from '@/components/Home'
import firebase from "firebase";

Vue.use(Router);

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
