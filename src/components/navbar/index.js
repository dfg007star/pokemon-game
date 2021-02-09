import React from "react";
import cn from "classnames";

import s from "./style.module.css";

const Navbar = ({ onClickMenu, isActive, bgActive = false }) => {
  const handleClick = () => {
    onClickMenu && onClickMenu();
  };
  return (
    <nav id={s.navbar} className={cn({ [s.bgActive]: bgActive })}>
      <div className={s.navWrapper}>
        <p className={s.brand}>LOGO</p>
        <a
          className={cn(s.menuButton, { [s.active]: isActive })}
          onClick={handleClick}
          href="#"
        >
          <span />
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
