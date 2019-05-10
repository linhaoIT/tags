<template>
  <div>
    <Navbar/>
    <div class="login container">
      <form class="card-panel" submit.prevent="login">
        <h2 class="center blue-text">Login</h2>

          <div class="field">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email">

          <div class="field">
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="password">
          </div>
            <p v-if="feedback" class="red-rext center">{{ feedback }}</p>
            <div class="field">
              <button class="btn #0288d1 light-blue darken-2"> Login</button>
            </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
    import firebase from 'firebase'
    import Navbar from "@/components/layout/Navbar";
    export default {
        name: "Login.vue",
      components: {Navbar},
      data(){
          return {
            email: null,
            password: null,
            feedback: null
          }
        },
      methods:{
          login(){
            if(this.email && this.password){
              firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(cred=>{
                console.log(user)
                this.$router.push({name: 'Home'})
              }).catch(err =>{
                this.feedback = err.message
              })
              this.feedback=null
            }else{
              this.feedback='Please fill in both fields'
            }
          }
      }
    }
</script>

<style scoped>
.login{
  max-width: 400px;
  margin-top: 60px;
}
  .login h2{
    font-size: 2.4em;
  }

  .login ,field{
    margin-bottom: 16px;
  }
</style>
