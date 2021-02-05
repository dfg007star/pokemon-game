import { useRouteMatch, Route, Switch } from "react-router-dom";

import cn from "classnames";

import HomePage from "../../routes/home";
import GamePage from "../../routes/game";
import MenuHeader from "../menu-header";
import Footer from "../footer";
import About from "../../routes/about";
import Contact from "../../routes/contact";
import NotFound from "../../routes/notFound";

import s from "./style.module.css";

const App = () => {
  const match = useRouteMatch("/");
  return (
    <Switch>
      <Route path="/404" render={() => <h1>404 Not Found</h1>} />
      <Route>
        <>
          <MenuHeader bgActive={!match.isExact} />
          <div className={cn(s.wrap, { [s.isHomePage]: match.isExact })}>
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
  );
};

export default App;
