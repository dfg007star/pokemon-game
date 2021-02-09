import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { PokemonContext } from "../../../../context/pokemonContext";

import PokemonCard from "../../../../components/pokemon-card";
import s from "./style.module.css";
import { FireBaseContext } from "../../../../context/firebaseContext";

const newPokemon = {
  abilities: ["keen-eye", "tangled-feet", "big-pecks"],
  base_experience: 122,
  height: 11,
  id: 666,
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

const StarPage = () => {
  const firebase = useContext(FireBaseContext);
  const SelectedContext = useContext(PokemonContext);
  const history = useHistory();
  const [pokemons, setPokemons] = useState({});

  useEffect(() => {
    firebase.getPokemonSoket((pokemons) => {
      setPokemons(pokemons);
    });
  }, []);

  const onCardClick = (id) => {
    setPokemons((prevState) => {
      return Object.entries(prevState).reduce((acc, item) => {
        let pokemon = { ...item[1] };
        if (pokemon.id === id && !pokemon.isSelected) {
          pokemon.isSelected = true;
          pushToContext(item);
        }
        acc[item[0]] = pokemon;
        return acc;
      }, {});
    });
  };

  const pushToContext = (val) => {
    SelectedContext.pokemon.push(val);
  };

  const addPokemon = () => {
    const data = newPokemon;
    firebase.addPokemon(data, () => {});
  };

  return (
    <div>
      <div className="d-flex justify-content-center mb-5 mt-1">
        <button onClick={addPokemon} className="btn btn-secondary mr-2">
          Add Pokemon
        </button>
        <button
          onClick={() => {
            history.push("/game/board");
          }}
          className="btn btn-primary"
        >
          Start Game
        </button>
      </div>

      <div className={s.flex}>
        {Object.entries(pokemons).map(
          ([key, { id, name, img, type, values, isSelected }]) => (
            <PokemonCard
              key={key}
              name={name}
              img={img}
              id={id}
              type={type}
              values={values}
              isActive={true}
              onCardClick={onCardClick}
              isSelected={isSelected}
            />
          )
        )}
      </div>
    </div>
  );
};

export default StarPage;
