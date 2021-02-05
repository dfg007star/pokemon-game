import { useState, useEffect } from "react";

import database from "../../services/firebase";
import PokemonCard from "../../components/pokemon-card";
import s from "./style.module.css";

const GamePage = () => {
  const [pokemons, setPokemons] = useState({});
  const idNext = Math.floor(Math.random() * 1000);
  const newPokemon = {
    abilities: ["keen-eye", "tangled-feet", "big-pecks"],
    base_experience: 122,
    height: 11,
    id: idNext,
    img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
    name: "pidgeotto",
    stats: {
      attack: 60,
      defense: 55,
      hp: 63,
      "special-attack": 50,
      "special-defense": 50,
      speed: 71,
    },
    type: "flying",
    values: {
      bottom: 7,
      left: 5,
      right: 2,
      top: "A",
    },
  };

  useEffect(() => {
    database.ref("pokemons").once("value", (snapshot) => {
      setPokemons(snapshot.val());
    });
  }, [pokemons]);

  const onCardClick = (id) => {
    setPokemons((prevState) => {
      return Object.entries(prevState).reduce((acc, item) => {
        const pokemon = { ...item[1] };
        if (pokemon.id === id) {
          database.ref("pokemons/" + item[0]).set({
            ...pokemon,
            isActive: !pokemon.isActive,
          });
        }
        acc[item[0]] = pokemon;
        return acc;
      }, {});
    });
  };

  const addPokemon = () => {
    var newPostKey = database.ref().child("pokemons").push().key;
    var updates = {};
    updates["/pokemons/" + newPostKey] = newPokemon;
    return database.ref().update(updates);
  };

  return (
    <div>
      <button onClick={addPokemon} className="btn btn-secondary m-auto d-flex">
        Add Pokemon
      </button>
      <div className={s.flex}>
        {Object.entries(pokemons).map(
          ([key, { id, name, img, type, values, isActive }]) => (
            <PokemonCard
              key={key}
              name={name}
              img={img}
              id={id}
              type={type}
              values={values}
              isActive={isActive}
              onCardClick={onCardClick}
            />
          )
        )}
      </div>
    </div>
  );
};

export default GamePage;
