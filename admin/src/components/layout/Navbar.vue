<template>
  <div class="Navbar">
    <nav class="#0288d1 light-blue darken-2">
      <div class="container">
        <router-link :to="{name:'Home'}"><img src= '../../assets/icon.png'  alt="icon: rate my course" class="icon"></router-link>
        <ul class="right">
          <li><router-link :to="{name: 'Signup'}">Signup</router-link></li>
          <li><router-link :to="{name: 'Login'}">Login</router-link></li>
          <li><a @click="logout">Logout</a></li>
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

      }
    },
    components:{
      //icon
    },
    methods:{
      logout(){
        firebase.auth().signOut().then(() => {
          this.$router.push({name: 'Signup'})
        })
      }

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

  .webname{
    font-family: "Comic Sans MS";
    font-size: x-large;
    color: black;
  }
</style>
