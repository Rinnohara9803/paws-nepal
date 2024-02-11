import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDgsv6Zdi6v82ZEe465-iPY-LbDX3-wikE",
  authDomain: "paws-nepal-4e903.firebaseapp.com",
  projectId: "paws-nepal-4e903",
  storageBucket: "paws-nepal-4e903.appspot.com",
  messagingSenderId: "91684610857",
  appId: "1:91684610857:web:1fdb1f05881f75142ecd38",
  measurementId: "G-SEJJYB808Y",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { auth, db, storage };