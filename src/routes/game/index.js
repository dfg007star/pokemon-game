import { useState } from "react";
import { useRouteMatch, Route, Switch } from "react-router-dom";

import StartPage from "./routes/start";
import BoardPage from "./routes/board";
import FinishPage from "./routes/finish";

import { PokemonContext } from "../../context/pokemonContext";

const GamePage = () => {
  const match = useRouteMatch("/game");
  const [pokemon, setPokemon] = useState([]);

  const handlerIsSelect = (val) => {
    setPokemon(val);
  };

  return (
    <PokemonContext.Provider value={{ pokemon, inSelect: handlerIsSelect }}>
      <Switch>
        <Route path={`${match.path}/`} exact component={StartPage} />
        <Route path={`${match.path}/board`} component={BoardPage} />
        <Route path={`${match.path}/finish`} component={FinishPage} />
      </Switch>
    </PokemonContext.Provider>
  );
};
export default GamePage;
