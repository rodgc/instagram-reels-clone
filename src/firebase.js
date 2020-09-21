import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCF1AJUradXxSwhE3xa2o9nJQMg0N92cf0",
  authDomain: "instagram-reels-clone-bf37d.firebaseapp.com",
  databaseURL: "https://instagram-reels-clone-bf37d.firebaseio.com",
  projectId: "instagram-reels-clone-bf37d",
  storageBucket: "instagram-reels-clone-bf37d.appspot.com",
  messagingSenderId: "382535308243",
  appId: "1:382535308243:web:497cc888a0de629b309526",
  measurementId: "G-4TPQG7XMPT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
