import { useState } from "react";
import cn from "classnames";

import cardBackSide from "../../assets/card-back-side.jpg";
import p from "./pokemon-card.module.css";

const PokemonCard = ({ name, img, id, type, values }) => {
  const [isActive, setActive] = useState(false);

  const handleClick = () => {
    setActive(!isActive);
  };

  return (
    <div className={p.root} onClick={handleClick}>
      <div className={cn(p.pokemonCard, { [p.active]: isActive })}>
        <div className={p.cardFront}>
          <div className={cn(p.front, p.wrap)}>
            <div className={cn(p.pokemon, p[type])}>
              <div className={p.values}>
                <div className={cn(p.count, p.top)}>{values.top}</div>
                <div className={cn(p.count, p.right)}>{values.right}</div>
                <div className={cn(p.count, p.bottom)}>{values.bottom}</div>
                <div className={cn(p.count, p.left)}>{values.left}</div>
              </div>
              <div className={p.imgContainer}>
                <img src={img} alt={name} />
              </div>
              <div className={p.info}>
                <span className={p.number}>#{id}</span>
                <h3 className={p.name}>{name}</h3>
                <small className={p.type}>
                  Type: <span>{type}</span>
                </small>
              </div>
            </div>
          </div>
        </div>

        <div className={p.cardBack}>
          <div className={cn(p.wrap, p.back)}>
            <img src={cardBackSide} alt="Сard back side" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
