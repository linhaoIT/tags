<template>
  <div class="homePage">
    <div class="navbar">
      <nav class="#0288d1 light-blue darken-2">
        <div class="container">
          <a href="" class="left">
            <img src= '../assets/icon.png' alt="icon: rate my course" class="icon">
          </a>
          <div class="webname">Rate My Course System</div>
        </div>
      </nav>
    </div>
    <img class="slogan" src="../assets/slogan.png" alt="slogan">
    <a class="Signup waves-effect waves-light btn-large #0288d1 light-blue darken-2" href=""><i class="material-icons left">assignment</i>Sign up</a>
    <a class="Login waves-effect waves-light btn-large #0288d1 light-blue darken-2" href=""><i class="material-icons left">assignment_ind</i>Log in</a>

  </div>
</template>

<script>

  export default {
    name: "Home",
    data(){
      return{

      }
    },
    components:{

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

  .homePage{
    position: relative;
    background-image: url("../assets/light.jpg");
    background-color: #cccccc;
    background-repeat: no-repeat;
    background-size: cover;
    height: 820px;
    background-position: center;
  }

  .slogan{
    position: relative;
    height: 350px;
    left: 180px;
    top: 100px;
  }
  .webname{
    font-family: "Comic Sans MS";
    font-size: x-large;
    color: white;
  }

  .Signup{
    position: relative;
    right: 340px;
    top: 170px;
  }

  .Login{
    position: relative;
    right: 260px;
    top: 170px;

  }

</style>
