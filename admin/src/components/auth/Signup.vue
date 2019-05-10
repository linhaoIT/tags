<template>
   <div>
     <Navbar/>
     <div class="signup container">
     <form @submit.prevent="signup" class="card-panel">
       <h2 class="center blue-text">Signup</h2>
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
       <p class="red-text center" v-if="feedback"> {{feedback}}</p>
       <div class="field center">
       <button class="btn #0288d1 light-blue darken-2">Signup</button>
       </div>
     </form>
     </div>
   </div>
</template>

<script>
  import slugify from 'slugify'
  import db from '@/firebase/init'
  import firebase from 'firebase'
  import Navbar from "@/components/layout/Navbar";
    export default {
        name: "Signup",
      components: {Navbar},
      data(){
          return{
            email: null,
            password: null,
            name: null,
            feedback: null,
            slug: null
          }
      },
      methods:{
          signup(){
            if(this.name && this.email && this.password){
              this.slug = slugify(this.name, {
                replacement: '-',
                remove: /[@:\-!"'().~+_*$]/g,
                lower: true
              })
              let ref = db.collection('users').doc(this.slug)
              ref.get().then(doc => {
                if(doc.exists){
                  this.feedback = 'This name already exists'
                }else{
                  firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(cred =>{
                    ref.set({
                      name: this.name,
                      geolocation:null,
                      user_id: cred.user.uid
                    })
                  }).then(()=>{
                    this.$router.push({name: 'WorkSpace'})
                  })
                    .catch(err =>{
                    console.log(err)
                    this.feedback = err.message
                  })
                  this.feedback = 'This name is free to use'
                }
              })
              console.log(this.slug)
            }else{
              this.feedback = "You must enter all fields"
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
