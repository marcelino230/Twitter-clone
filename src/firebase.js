import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyBJD166aJqwhW1Y-dkKHfiishOQUPraE7U",
  authDomain: "twitter-clone-84df6.firebaseapp.com",
  projectId: "twitter-clone-84df6",
  storageBucket: "twitter-clone-84df6.appspot.com",
  messagingSenderId: "895474383735",
  appId: "1:895474383735:web:93bcb4b969a60b735fbf72",
  measurementId: "G-052Y26RMVW"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);

  const db= firebaseApp.firestore();

  export default db;