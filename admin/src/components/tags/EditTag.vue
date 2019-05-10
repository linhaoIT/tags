<template>
    <div v-if="tag" class="edit-tag container">
      <h2 >Edit {{tag.title }} Tag</h2>
      <form @submit.prevent="EditTags">
        <div class="field title">
          <label for="title">Tag Title:</label>
          <input type="text" name="title" id="title" v-model="tag.title">
        </div>
        <div class="field" v-for="(ing, index) in tag.components" :key="index" >
          <label for="component">component:</label>
          <input type="text" name="component" id="component" v-model="tag.components[index]">
          <i class="material-icons delete" @click="deleteIng(ing)">delete</i>
        </div>
        <div class="field add-component">
          <label for="add-component"> Add-component</label>
          <input type="text" name="component" id="add-component" @keydown.tab.prevent="AddIng" v-model="another">
        </div>
        <div class="field center-align">
          <p v-if="feedback" class="red-text">{{ feedback }}</p>
          <button class="btn pink">Update Tag</button>
        </div>
      </form>
    </div>
</template>

<script>
  import db from '@/firebase/init'
  import slugify from 'slugify'

    export default {
        name: "EditTag",
        data(){
          return{
            tag: null,
            another: null,
            feedback: null
          }
        },
      methods:{
          EditTags(){
              if(this.tag.title){
                this.feedback = null;
                this.slug = slugify(this.tag.title, {
                  replacement: '-',
                  remove: /[$*_+.()'"!-:@]/g,
                  lower:true
                });
                db.collection('tags').doc(this.tag.id).update({
                  title: this.tag.title,
                  components: this.tag.components,
                  slug: this.tag.slug
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
            this.tag.components.push(this.another);
            this.another = null;
            this.feedback = null
          }else{
            this.feedback = 'You must enter a value to add an component'
          }
        },
        deleteIng(ing){
          this.tag.components = this.tag.components.filter(component => {
            return component !== ing
          })
        }
      },
      created(){
          let ref = db.collection('tags').where('slug', '==', this.$route.params.tag_slug);
          ref.get().then(snapshot => {
            snapshot.forEach(doc => {
              //console.log(doc.data())
              this.tag = doc.data();
              this.tag.id = doc.id
            })
          })
      }
    }
</script>

<style scoped>
  .edit-tag{
    margin-top: 60px;
    padding: 20px;

  }

  .edit-tag h2{
    font-size: 2em;
    margin: 20px auto;
  }

  .edit-tag .field{
    margin: 20px auto;
    position: relative;
  }

  .edit-tag .delete{
    position: absolute;
    right:0;
    bottom:16px;
    color: #aaa;
    font-size: 1.4em;
    cursor: pointer;
  }
</style>
