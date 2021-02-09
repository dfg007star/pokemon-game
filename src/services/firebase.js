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
class Firebase {
  constructor() {
    this.fire = firebase;
    this.database = this.fire.database();
  }

  getPokemonSoket = (cb) => {
    this.database.ref("pokemons").on("value", (snapshot) => {
      cb(snapshot.val());
    });
  };

  getPokemonsOnce = async () => {
    return await this.database
      .ref("pokemons")
      .once("value")
      .then((snapshot) => snapshot.val());
  };

  updatePokemon = (key, pokemon) => {
    this.database.ref("pokemon/${key}").set(pokemon);
  };

  addPokemon = (data, cb) => {
    const newKey = this.database.ref().child("pokemons").push().key;
    this.database
      .ref("pokemons/" + newKey)
      .set(data)
      .then(() => cb());
  };
}

export default Firebase;
