<template>
    <div class="navbar">
      <nav class="#2979ff blue accent-3">
        <div class="container">
          <img src= '../../assets/icon.png'  alt="icon: rate my course" class="icon">
          <a href="" class="icon left">RMC</a>
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
</style>
