<template>
  <div class="Navbar">
    <nav class="#0288d1 light-blue darken-2">
      <div class="container">
        <router-link :to="{name:'Home'}"><img src= '../../assets/icon.png'  alt="icon: rate my course" class="icon"></router-link>
        <ul class="right">
          <li v-if="!user"><router-link :to="{name: 'Signup'}">Signup</router-link></li>
          <li v-if="!user"><router-link :to="{name: 'Login'}">Login</router-link></li>
          <li v-if="user"><a>{{user.email}}</a></li>
          <li v-if="user"><a @click="logout">Logout</a></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
  import firebase from 'firebase'
  //import icon from
  export default {
    name: "Navbar",
    data(){
      return {
        user: null
      }
    },
    components:{
      //icon
    },
    methods:{
      logout(){
        firebase.auth().signOut().then(() => {
          this.$router.push({name: 'Login'})
        })
      }

    },
    created(){
      //let user = firebase.auth().currentUser
      firebase.auth().onAuthStateChanged((user) => {
        if(user){
          this.user = user
        }else{
          this.user = null
        }
      })
    }
  }
</script>

<style scoped>
  .icon {
    width: 70px;
    height: auto;

    /*//background: url('@/assets/icon.jpg') center center no-repeat;*/
    /*background-size: 100px auto;*/
    /*}*/
  }
</style>
