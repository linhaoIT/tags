<template>
   <div class="signup container">
     <form @submit.prevent="signup" class="card-panel">
       <h2 class="center deep-purple-text">Signup</h2>
       <div class="field">
         <label for="name">Name:</label>
         <input type="text" id="name" v-model="name">
       </div>

       <div class="field">
         <label for="password">Password:</label>
         <input type="password" id="password" v-model="password">
       </div>

       <div class="field">
         <label for="email">Email:</label>
         <input type="email" id="email" v-model="email">
       </div>
       <div class="field center"></div>
       <button class="btn deep-purple">Signup</button>
     </form>
   </div>
</template>

<script>
    export default {
        name: "Signup",
      data(){
          return{
            email: null,
            password: null,
            name: null,
            feedback: null
          }
      },
      methods:{
          signup(){
            if(this.name){

            }else{
              this.feedback = "You must "
            }
          }
      }
    }
</script>

<style >
.signup{
  max-width: 400px;
  margin-top:60px;
}
  .signup h2{
    font-size: 2.4em;
  }

  .signup .field{
    margin-bottom: 16px;
  }

</style>
