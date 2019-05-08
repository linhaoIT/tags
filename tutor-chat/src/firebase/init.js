import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAbac1E81ncqTA8voMVTL01OgoMJn5GGk4",
  authDomain: "tutorchat-98874.firebaseapp.com",
  databaseURL: "https://tutorchat-98874.firebaseio.com",
  projectId: "tutorchat-98874",
  storageBucket: "tutorchat-98874.appspot.com",
  messagingSenderId: "707817476650",
  appId: "1:707817476650:web:825c03eb2234731c"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// firebaseApp.firestore().settings({ timestampsInSnapshots: true})

export default firebaseApp.firestore()
