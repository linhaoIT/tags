<template>
    <div class="login container">
      <form class="card-panel">
        <h2 class="center blue-text">Login</h2>

          <div class="field">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email">

          <div class="field">
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="password">
          </div>
            <div class="field">
              <button class="btn #0288d1 light-blue darken-2"> Login</button>
            </div>
        </div>
      </form>
    </div>
</template>

<script>
    export default {
        name: "Login.vue"
    }
</script>

<style scoped>

</style>
