import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PokemonContext } from "../../../../context/pokemonContext";

import PokemonCard from "../../../../components/pokemon-card";
import s from "./style.module.css";

const BoardPage = () => {
  const SelectedContext = useContext(PokemonContext);

  return (
    <div className={s.root}>
      <div className={s.playerOne}>
        {SelectedContext.pokemon.map(
          ([key, { id, name, img, type, values }]) => (
            <PokemonCard
              key={key}
              name={name}
              img={img}
              id={id}
              type={type}
              values={values}
              isActive={true}
              minimize
              className={s.card}
            />
          )
        )}
      </div>
      <div className={s.board}>
        <div className={s.boardPlate}>1</div>
        <div className={s.boardPlate}>2</div>
        <div className={s.boardPlate}>3</div>
        <div className={s.boardPlate}>4</div>
        <div className={s.boardPlate}>5</div>
        <div className={s.boardPlate}>6</div>
        <div className={s.boardPlate}>7</div>
        <div className={s.boardPlate}>8</div>
        <div className={s.boardPlate}>9</div>
      </div>
    </div>
  );
};

export default BoardPage;
