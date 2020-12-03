import React from "react";
import { NavLink } from "react-router-dom";
import css from "./../Dialogs.module.css";

class DialogItem extends React.Component {
  render() {
    let path = "/dialogs/" + this.props.id;

    return (
      <div className={css.dialog}>
        <NavLink to={path} activeClassName={css.active}>
          {this.props.name}
        </NavLink>
      </div>
    );
  }
}

/*
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
*/
export default DialogItem;
