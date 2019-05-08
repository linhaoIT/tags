<template>
  <div class="add-tag container">
    <h2 class="center-align indigo-text">Add New Tag</h2>
    <form @submit.prevent="AddTags">
      <div class="field title">
        <label for="title">Tag Title:</label>
        <input type="text" name="title" id="title" v-model="title">
      </div>
      <div v-for="(ing, index) in ingredients" :key="index">
        <label for="ingredient">Ingredient:</label>
        <input type="text" name="ingredient" id="ingredient" v-model="ingredients[index]">
      </div>
      <div class="field add-ingredient">
        <label for="add-ingredient"> Add-ingredient</label>
        <input type="text" name="ingredient" id="add-ingredient" @keydown.tab.prevent="AddIng" v-model="another">
      </div>
      <div class="field center-align">
        <p v-if="feedback" class="red-text">{{ feedback }}</p>
        <button class="btn pink">Add Tag</button>
      </div>
    </form>
  </div>
</template>

<script>
  import db from '@/firebase/init'
    export default {
        name: "addTags",
        data() {
          return {
            title: null,
            another: null,
            ingredients: [],
            feedback: null,
            slug: null
          }
        },
        methods:{
          AddTags(){
            if(this.title){
              db.collection('tags').add({
                title: this.title,
                ingredients: this.ingredients
              })
            }else{
              this.feedback = 'You must have a title'
            }
          },
          AddIng(){
            if(this.another){
              this.ingredients.push(this.another);
              this.another = null;
              this.feedback = null
            }else{
              this.feedback = 'You must entre a value to add an ingredient'
            }
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
}
</style>
