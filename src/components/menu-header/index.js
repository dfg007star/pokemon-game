import React, { useState } from "react";

import Menu from "../menu";
import Navbar from "../navbar";

const MenuHeader = () => {
  const [active, setActive] = useState(false);

  const addClassActive = () => {
    setActive(!active);
  };
  return (
    <>
      <Menu openMenu={active} />
      <Navbar onClickMenu={addClassActive} isActive={active} />
    </>
  );
};

export default MenuHeader;
