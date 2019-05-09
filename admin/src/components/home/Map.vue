<template>
    <div class="map">
      <div class="google-map" id="map"></div>
    </div>
</template>

<script>
  import db from '@/firebase/init'
    export default {
      name: "Map",
      data(){
        return {
          lat: 15,
          lng: 15
        }
      },
      methods: {
        renderMap(){
          const map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: this.lat, lng: this.lng},
            zoom: 6,
            maxZoom: 15,
            minZoom: 3,
            streetViewControl: true
          })
        }
      },
      mounted(){
        if(navigator.geolocation){
          navigator.geolocation.getCurrentPosition(pos => {
            this.lat = pos.coords.latitude
            this.lng = pos.coords.longitude

            db.collection('users').where('user_id', '==', 'user.uid').get().then(snapshot => {
              snapshot.forEach((doc) => {
                db.collection('users').doc(doc.id).update({
                  geolocation:{
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude
                  }
                })
              })
            }).then(()=>{
              this.renderMap()
            })

            this.renderMap()
          }, (err) => {
            console.log(err)
            this.renderMap()
          }, {maximumAge: 60000, timeout: 3000 })
        }else{
          this.renderMap()
        }
        //console.log(firebase.auth().currentUser)


      }
    }
</script>

<style>
.google-map{
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: #fff;
  position: absolute;
  top: 0;
  left:0;
  z-index: -1;
}
</style>
