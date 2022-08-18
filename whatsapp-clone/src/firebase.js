// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAtGTKyF50BLtdHocRcK7GbLBwegK3fH9Q",
    authDomain: "whats-app-clone-surya1000.firebaseapp.com",
    projectId: "whats-app-clone-surya1000",
    storageBucket: "whats-app-clone-surya1000.appspot.com",
    messagingSenderId: "182642270569",
    appId: "1:182642270569:web:bc3fac85b1218772439df8",
    measurementId: "G-788WH62ZKQ"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export {auth, provider};
  export default db;