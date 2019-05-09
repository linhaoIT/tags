<template>
    <div class="new-message">
      <form @submit.prevent="addMessage"></form>
        <label for="new-message">New Message (enter to add): </label>
        <input type="text" name="new-message" id="new-message" v-model="newMessage">
    </div>
</template>

<script>
    export default {
        name: "NewMessage",
      props:['name'],
        data(){
          return{
            newMessage: null
          }
        },
      methods:{
          addMessage(){

          }
      }
    }
</script>

<style scoped>

</style>
