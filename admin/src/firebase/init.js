// Your web app's Firebase configuration

import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyCvT-iIOAQQsNkr9eGXhvog_lynmKIbZBI",
  authDomain: "admin-f39c4.firebaseapp.com",
  databaseURL: "https://admin-f39c4.firebaseio.com",
  projectId: "admin-f39c4",
  storageBucket: "admin-f39c4.appspot.com",
  messagingSenderId: "348936083061",
  appId: "1:348936083061:web:7dedafea84c3a7f7"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// firebaseApp.firestore().settings({ timestampsInSnapshots: true})

export default firebaseApp.firestore()
