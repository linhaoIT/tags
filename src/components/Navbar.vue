<template>
    <div class="navbar">
      <nav class="nav-extended #2979ff blue accent-3">
        <div class="nav-content">
          <router-link to="">
            <span class="nav-title">Add Tags</span>
          </router-link>
          <a href="" class="btn-floating btn-large halfway-fab #29b6f6 light-blue lighten-1">
            <router-link to="">
              <i class="material-icons">add</i>
            </router-link>
          </a>
        </div>
      </nav>
    </div>
</template>

<script>
    export default {
      name: "Navbar",
      data(){
          return{

          }
      }
    }
</script>

<style scoped>
  .navbar nav{
    padding: 0 40px;
  }
</style>
