<template>
  <div>
    <Navbar/>

    <div class="add-tag container">
      <h2 class="center-align indigo-text">Add New Tag</h2>
      <form @submit.prevent="AddTags">
        <div class="field title">
          <label for="title">Tag Title:</label>
          <input type="text" name="title" id="title" v-model="title">
        </div>
        <div class="field" v-for="(ing, index) in components" :key="index" >
          <label for="component">Ingredient:</label>
          <input type="text" name="component" id="component" v-model="components[index]">
          <i class="material-icons delete" @click="deleteIng(ing)">delete</i>
        </div>
        <div class="field add-component">
          <label for="add-component"> Add-component</label>
          <input type="text" name="component" id="add-component" @keydown.tab.prevent="AddIng" v-model="another">
        </div>
        <div class="field center-align">
          <p v-if="feedback" class="red-text">{{ feedback }}</p>
          <button class="btn pink">Add Tag</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import db from '@/firebase/init'
  import slugify from 'slugify'
  import Navbar from '../layout/Navbar'
    export default {
        name: "addTags",
        data() {
          return {
            Navbar,
            title: null,
            another: null,
            components: [],
            feedback: null,
            slug: null
          }
        },
        methods:{
          AddTags(){
            if(this.title){
              this.slug = slugify(this.title, {
                replacement: '-',
                remove: /[$*_+.()'"!-:@]/g,
                lower:true
              })
                db.collection('tags').add({
                  title: this.title,
                  components: this.components,
                  slug: this.slug
                }).then(()=>{
                  this.$router.push({name: 'Index'})
                }).catch(err=>{
                  console.log(err)
                })
            }else{
              this.feedback = 'You must have a title'
            }
          },
          AddIng(){
            if(this.another){
              this.components.push(this.another);
              this.another = null;
              this.feedback = null
            }else{
              this.feedback = 'You must enter a value to add an component'
            }
          },
          deleteIng(ing){
            this.components = this.components.filter(component => {
              return component != ing
            })
          }

        }
    }

</script>

<style scoped>
.add-tag{
  margin-top: 60px;
  padding: 20px;

}

.add-tag h2{
  font-size: 2em;
  margin: 20px auto;
}

.add-tag .field{
  margin: 20px auto;
  position: relative;
}



.add-tag .delete{
    position: absolute;
    right:0;
    bottom:16px;
    color: #aaa;
    font-size: 1.4em;
    cursor: pointer;
  }
</style>
