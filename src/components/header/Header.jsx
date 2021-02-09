import React from "react";
import { NavLink } from "react-router-dom";
import css from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={css.header}>
      <div className={css.logo}>
        <NavLink to="/profile">
          <img
            src="https://i.pinimg.com/originals/86/b2/48/86b2489d04f827da9e36f05a237292dd.jpg"
            alt="logo"
          ></img>
        </NavLink>
      </div>
      <div className={css.title}>
        <NavLink to="/profile">SquidWords</NavLink>
      </div>
      <div className={css.logIn}>
        {props.isAuth ? (
          <>
            <NavLink to="/profile">{props.login}</NavLink>
            <button onClick={props.logout}>LogOut</button>
          </>
        ) : (
          <NavLink to="/login">logIn</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
