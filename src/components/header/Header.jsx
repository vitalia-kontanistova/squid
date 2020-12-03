import React from "react";
import { NavLink } from "react-router-dom";
import css from "./Header.module.css";

class Header extends React.Component {
  render() {
    return (
      <header className={css.header}>
        <div className={css.logo}>
          <NavLink to="/">
            <img
              src="https://i.pinimg.com/originals/86/b2/48/86b2489d04f827da9e36f05a237292dd.jpg"
              alt="logo"
            ></img>
          </NavLink>
        </div>
        <div className={css.title}>
          <NavLink to="/">SquidWords</NavLink>
        </div>
      </header>
    );
  }
}

export default Header;
