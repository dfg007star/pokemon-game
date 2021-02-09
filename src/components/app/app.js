import { useState } from "react";
import { useRouteMatch, Route, Switch, useLocation } from "react-router-dom";

import cn from "classnames";

import HomePage from "../../routes/home";
import GamePage from "../../routes/game";
import MenuHeader from "../menu-header";
import Footer from "../footer";
import About from "../../routes/about";
import Contact from "../../routes/contact";
import NotFound from "../../routes/notFound";

import s from "./style.module.css";
import { FireBaseContext } from "../../context/firebaseContext";
import Firebase from "../../services/firebase";

const App = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const match = useRouteMatch("/");

  return (
    <FireBaseContext.Provider value={new Firebase()}>
      <Switch>
        <Route path="/404" render={() => <h1>404 Not Found</h1>} />
        <Route>
          <>
            <MenuHeader
              bgActive={!match.isExact && currentPath !== "/game/board"}
            />

            <div
              className={cn(
                s.wrap,
                {
                  [s.isHomePage]: match.isExact,
                },
                { [s.isHomePage]: currentPath === "/game/board" }
              )}
            >
              <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/game" component={GamePage} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route component={NotFound} />
              </Switch>
            </div>
            <Footer />
          </>
        </Route>
      </Switch>
    </FireBaseContext.Provider>
  );
};

export default App;
