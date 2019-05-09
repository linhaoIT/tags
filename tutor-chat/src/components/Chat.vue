<template>
    <div class="chat container">
      <h2 class="center teal-text">Tutorial Session</h2>
      <div class="card">
        <div class="card-content">
          <ul class="messages">
            <li v-for="msg in messages">
              <span class="teal-text"> msg.name</span>
              <span class="grey-text text-darken-3"> msg.content</span>
              <span class="grey-text time"> msg.timeStamp</span>
            </li>
          </ul>
        </div>
        <div class="card-action">
          <NewMessage :name="name"/>
        </div>
      </div>
    </div>
</template>

<script>
  import db from '@/firebase/init'
  import NewMessage from '@/components/NewMessage'
    export default {
      name: "Chat",
      props: ['name'],
      components: {
        NewMessage,
        msg
      },
      data(){
        return{

        }
      },
      created(){
        let ref = db.collection('messages')
        ref.onSnapshot(snapshot => {
          console.log(docChanges())
        })
    }

  }
</script>

<style>
.chat h2{
  font-size: 2.6em;
  margin-bottom: 40px;
}

  .chat span{
    font-size: 1.4em;
  }

  .chat .time{
    display: block;
    font-size: 1.2em;
  }
</style>
