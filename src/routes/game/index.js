import { useState } from "react";

import PokemonCard from "../../components/pokemon-card";
import { POKEMONS } from "../home";

import { useHistory } from "react-router-dom";
import s from "./style.module.css";

const GamePage = ({ onReturnHome }) => {
  const [pokemons, setPokemons] = useState(POKEMONS);

  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  };

  const onCardClick = (id) => {
    setPokemons((pokemons) => {
      const index = pokemons.findIndex((el) => el.id === id);
      const oldItem = pokemons[index];
      const newItem = { ...oldItem, isActive: !oldItem.isActive };
      const newArray = [
        ...pokemons.slice(0, index),
        newItem,
        ...pokemons.slice(index + 1),
      ];
      return newArray;
    });
  };

  return (
    <div>
      <button onClick={handleClick} className="btn btn-primary">
        Back to Home-Page
      </button>
      <div className={s.flex}>
        {pokemons.map((item) => (
          <PokemonCard
            key={item.id}
            name={item.name}
            img={item.img}
            id={item.id}
            type={item.type}
            values={item.values}
            onCardClick={onCardClick}
            isActive={item.isActive}
          />
        ))}
      </div>
    </div>
  );
};

export default GamePage;
