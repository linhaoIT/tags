// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import VueChatScroll from 'vue-chat-scroll'

Vue.use(VueChatScroll);

Vue.config.productionTip = false
//wait

let app =null;


firebase.auth().onAuthStateChanged(() => {
  /* eslint-disable no-new */
  if(!app){
     app = new Vue({
       el: '#app',
       router,
       components: {App},
       template: '<App/>'
     })
  }
})

