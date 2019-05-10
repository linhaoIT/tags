<template>
  <div class="wkspace">
    <Navbar/>
      <div class=" center frame">
          <router-link :to="{name: 'Welcome'}"><img class="Tutoring fig" src="../../assets/diss.jpg"></router-link>
          <router-link :to="{name: 'Map'}"><img class="hangout fig" src="../../assets/trav.jpg"></router-link>
           <router-link :to="{name: 'Tag'}"><img class="notes fig" src="../../assets/note.jpg"></router-link>
      </div>
  </div>
</template>

<script>
    import Navbar from "@/components/layout/Navbar";
    export default {
        name: "workspace",
      components: {Navbar}
    }
</script>

<style>
  .fig{
    position: relative;
    top: 50px;
    left: 100px;
    max-width: 400px;
    max-hight:50px;
    float:left;
    margin: 40px 40px;
    cursor: pointer;
    /*opacity:0;*/
    /*filter(alpha=0)*/
    /*opacity: 0.8; filter(alpha=80);*/
  }

  /*fig{opacity: 0.8; filter(alpha=80)}*/
  /*fig:hover{opacity:1; filter(alpha=100)}*/

  .frame{
    position: relative;
    left: 100px;
    max-width: 1000px;
    max-hight:400px;
  }


  .wkspace{
    position: relative;
    background-image: url("../../assets/night.jpg");
    background-color: #cccccc;
    background-repeat: no-repeat;
    background-size: cover;
    height: 820px;
    background-position: center;
  }

</style>
