// import { firebase } from "firebase";
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBhricisSmG5-XJNRLYFktJRX_1XLRbHlc",
  authDomain: "clone-1f3d9.firebaseapp.com",
  projectId: "clone-1f3d9",
  storageBucket: "clone-1f3d9.appspot.com",
  messagingSenderId: "242161626976",
  appId: "1:242161626976:web:31afcea939d3340466f805",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;

// import * as firebase from 'firebase'
// https://stackoverflow.com/questions/62359715/error-cannot-read-property-initializeapp-of-undefined
