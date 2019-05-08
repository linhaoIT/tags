<template>
  <div class="add-tag container">
    <h2 class="center-align indigo-text">Add New Tag</h2>
    <form @submit.prevent="AddTag">
      <div class="field title">
        <label for="title">Tag Title:</label>
        <input type="text" name="title" v-model="title">
      </div>
      <div class="field add-ingredient">
        <label for="add-ingredient"> Add-ingredient</label>
        <input type="text" name="ingredient">
      </div>
      <div class="field center-align">
        <button class="btn pink">Add Tag</button>
      </div>
    </form>
  </div>
</template>

<script>
    export default {
        name: "addTags",
        data() {
          return {}
        },
        methods:{
          AddTag(){

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
