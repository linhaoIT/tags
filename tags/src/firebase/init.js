import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyAUM0JKTFHSMA7f4MnLqMHQhRvyxHLPF-A",
  authDomain: "tags-a31e4.firebaseapp.com",
  databaseURL: "https://tags-a31e4.firebaseio.com",
  projectId: "tags-a31e4",
  storageBucket: "tags-a31e4.appspot.com",
  messagingSenderId: "160152576956",
  appId: "1:160152576956:web:05606b997c2dba70"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// firebaseApp.firestore().settings({ timestampsInSnapshots: true})


export default firebaseApp.firestore()
