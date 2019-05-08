<template>
    <div v-if="tag" class="edit-tag container">
      <h2 >Edit {{tag.title }} Tag</h2>
    </div>
</template>

<script>
  import db from '@/firebase/init'

    export default {
        name: "EditTag",
        data(){
          return{
            tag: null
          }
        },
      created(){
          let ref = db.collection('tags').where('slug', '==', this.$route.params.tag_slug)
          ref.get().then(snapshot => {
            snapshot.forEach(doc => {
              //console.log(doc.data())
              this.tag = doc.data()
              this.tag.id = doc.id
            })
          })
      }
    }
</script>

<style scoped>

</style>
