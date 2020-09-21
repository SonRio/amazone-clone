import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAiKzO5HG_cv3NwETrjq2tX9RasBkh1_7M",
  authDomain: "clone-a2b66.firebaseapp.com",
  DatabaseURL: "https://clone-a2b66.firebaseio.com",
  projectId: "clone-a2b66",
  storageBucket: "clone -a2b66.appspot.com ",
  messagingSenderId: " 1064481012420 ",
  appId: " 1: 1064481012420: web: 269aec72953bc96bc06791 ",
  measurementId: " G-GF3QCCEXFM ",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export{ db, auth };