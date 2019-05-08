<template>
  <div class="index container">
    <div class="card" v-for="myTag in tags" :key="myTag.id">
      <div class="card-content">
        <i class="material-icons delete" @click="deleteTag(myTag.id)">delete</i>
        <h2 class="indigo-text">{{ myTag.title }}</h2>
          <ul class="ingredients">
            <li v-for="(ing, index) in myTag.ingredients" :key="index">
              <span class="chip">{{ ing }}</span>
            </li>
          </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      tags:[
        { title: "COMP2017", slug: 'comp2017', ingredients: ['bananas', 'coffee', 'milk'], id: '1'},
        { title: "COMP2018", slug: 'comp2018', ingredients: ['mango', 'coffee', 'juice'], id: '2'}
      ]
    }
  },
  methods:{
    deleteTag(id){
      this.tags = this.tags.filter(tag => {
        return tag.id !== id
      })
    }
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
  .index .ingredients{
    margin: 30px auto;
  }

  .index .ingredients li{
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
