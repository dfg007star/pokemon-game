import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAVDvqlAQyCl7YTcfLPIhg43uthQ4FRQDw",
  authDomain: "pokemon-game-86a02.firebaseapp.com",
  databaseURL:
    "https://pokemon-game-86a02-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pokemon-game-86a02",
  storageBucket: "pokemon-game-86a02.appspot.com",
  messagingSenderId: "293909259259",
  appId: "1:293909259259:web:8eff9a5a24e9dafdb3a15e",
};

firebase.initializeApp(firebaseConfig);

export const fire = firebase;

export const database = firebase.database();

export default database;
