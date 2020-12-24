import React from "react";
import { NavLink } from "react-router-dom";
import css from "./../Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={css.dialog}>
      <NavLink to={path} activeClassName={css.active}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
