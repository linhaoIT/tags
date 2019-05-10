<template>
  <div class="wkspace">
    <Navbar/>
      <div class=" center frame">
        <router-link :to="{name: ''"}><img class="rating fig" src="../../assets/rate.jpg"></router-link>
        <router-link :to="{name: ''"}><img class="notes fig" src="../../assets/note.jpg"></router-link>
        <router-link :to="{name: ''"}><img class="Tutoring fig" src="../../assets/diss.jpg"></router-link>
        <router-link :to="{name: ''"}><img class="hangout fig" src="../../assets/trav.jpg"></router-link>
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
  }

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
