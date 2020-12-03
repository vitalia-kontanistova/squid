import React from "react";
import css from "./../Dialogs.module.css";

class Message extends React.Component {
  render() {
    return <div className={css.message}>{this.props.message}</div>;
  }
}

/* 
const Message = (props) => {
  return <div className={css.message}>{props.message}</div>;
};

*/
export default Message;
