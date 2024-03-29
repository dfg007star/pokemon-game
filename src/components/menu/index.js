import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";

import s from "./style.module.css";

const MENU = [
  { title: "HOME", to: "/" },
  { title: "GAME", to: "/game" },
  { title: "ABOUT", to: "/about" },
  { title: "CONTACT", to: "/contact" },
];

const Menu = ({ openMenu, onClickClose }) => {
  const onMenuClick = () => {
    onClickClose && onClickClose();
  };
  return (
    <div
      className={cn(s.menuContainer, {
        [s.active]: openMenu === true,
        [s.deactive]: openMenu === false,
      })}
    >
      <div className={s.overlay} />
      <div>
        <ul>
          {MENU.map(({ title, to }, index) => (
            <li key={index}>
              <Link to={to} onClick={onMenuClick}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
