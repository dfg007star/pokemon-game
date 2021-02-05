import React, { useState } from "react";

import Menu from "../menu";
import Navbar from "../navbar";

const MenuHeader = ({ bgActive }) => {
  const [active, setActive] = useState(null);

  const addClassActive = () => {
    setActive((prevState) => !prevState);
  };
  return (
    <>
      <Menu openMenu={active} onClickClose={addClassActive} />
      <Navbar
        onClickMenu={addClassActive}
        isActive={active}
        bgActive={bgActive}
      />
    </>
  );
};

export default MenuHeader;
