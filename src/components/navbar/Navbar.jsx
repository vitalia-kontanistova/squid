import React from "react";
import { NavLink } from "react-router-dom";
import css from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={css.nav}>
      <div className={css.item}>
        <NavLink to="/profile" activeClassName={css.active_link}>
          Profile
        </NavLink>
      </div>
      <div className={css.item}>
        <NavLink to="/dialogs" activeClassName={css.active_link}>
          Dialogs
        </NavLink>
      </div>
      <div className={css.item}>
        <NavLink to="/users" activeClassName={css.active_link}>
          Users
        </NavLink>
      </div>
      <div className={css.item}>
        <NavLink to="/news" activeClassName={css.active_link}>
          News
        </NavLink>
      </div>
      <div className={css.item}>
        <NavLink to="/music" activeClassName={css.active_link}>
          Music
        </NavLink>
      </div>
      <div className={css.item}>
        <NavLink to="/settings" activeClassName={css.active_link}>
          Settings
        </NavLink>
      </div>
    </nav>
  );
};
export default Navbar;
