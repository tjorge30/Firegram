import firebase from 'firebase/app'
import "firebase/analytics";
import 'firebase/storage'
import 'firebase/firestore'
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBqcVFri5HMez6vfY7FtxsewFS1VDLFbYk",
    authDomain: "gallery-app-e1dab.firebaseapp.com",
    projectId: "gallery-app-e1dab",
    storageBucket: "gallery-app-e1dab.appspot.com",
    messagingSenderId: "243797979888",
    appId: "1:243797979888:web:fff6226365d9ad3ea68835",
    measurementId: "G-4LM45S5RTD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const analytics = firebase.analytics();
  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { analytics, projectStorage, projectFirestore, timestamp };