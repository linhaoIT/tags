<template>
  <div class="index container">
    <div class="card" v-for="myTag in tags" :key="myTag.id">
      <div class="card-content">
        <i class="material-icons delete" @click="deleteTag(myTag.id)">delete</i>
        <h2 class="indigo-text">{{ myTag.title }}</h2>
          <ul class="component">
            <li v-for="(ing, index) in myTag.component" :key="index">
              <span class="chip">{{ ing }}</span>
            </li>
          </ul>
      </div>
      <span class="btn-floating btn-large halfway-fab pink" >
        <router-link :to="{ name: 'EditTag', params : {tag_slug: myTag.slug}}">
          <i class="material-icons edit">edit</i>
        </router-link>
      </span>
    </div>
  </div>
</template>

<script>
  import db from '@/firebase/init'


export default {
  name: 'Index',
  data () {
    return {
      tags:[]
    }
  },
  methods:{
    deleteTag(id){
      db.collection('tags').doc(id).delete().then(()=>{
        this.tags = this.tags.filter(tag => {
          return tag.id !== id
        })
      })
      // this.tags = this.tags.filter(tag => {
      //   return tag.id !== id
      // })
    }
  },
  created(){
    db.collection('tags').get().then(snapshot => {
      snapshot.forEach(doc =>{
        //console.log(doc.data(), doc.id)
        let tag = doc.data();
        tag.id = doc.id;
        this.tags.push(tag)

      })
    })
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .index{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
    margin-top: 60px;
  }
  .index h2{
    font-size: 1.8em;
    text-align: center;
    margin-top: 0;
  }
  .index .component{
    margin: 30px auto;
  }

  .index .component li{
    display: inline-block;
  }

  .index .delete{
    position: absolute;
    top: 4px;
    right: 4px;
    cursor: pointer;
    color: #aaa;
    font-size: 1.4em;
  }
</style>
