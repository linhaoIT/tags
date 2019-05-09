<template>
  <div class="Navbar">
    <nav class="#0288d1 light-blue darken-2">
      <div class="container">
        <router-link :to="{name:'Home'}"><img src= '../../assets/icon.png'  alt="icon: rate my course" class="icon"></router-link>
        <ul class="right">
          <li><a href="">Sign up</a></li>
          <li><a href="">Login</a></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
  //import icon from
  export default {
    name: "Navbar",
    data(){
      return {

      }
    },
    components:{
      //icon
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
