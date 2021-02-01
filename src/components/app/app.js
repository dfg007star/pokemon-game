import { useState } from "react";
import HomePage from "../../routes/home";
import GamePage from "../../routes/game";

const App = () => {
  const [page, setPage] = useState("app");

  const handleChangePage = (page) => {
    setPage(page);
  };
  switch (page) {
    case "app":
      return <HomePage onChangePage={handleChangePage} />;
    case "game":
      return <GamePage onReturnHome={handleChangePage} />;
    default:
      return <HomePage />;
  }
};

export default App;
