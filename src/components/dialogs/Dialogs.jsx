import React from "react";
import DialogItem from "./dialogItem/DialogItem";
import css from "./Dialogs.module.css";
import Message from "./message/Message";

const Dialogs = (props) => {
  let messageElements = props.dialogPage.messages.map((message) => (
    <Message message={message.message} />
  ));

  let dialogElements = props.dialogPage.dialogs.map((dialog) => (
    <DialogItem id={dialog.id} name={dialog.name} />
  ));

  return (
    <div className={css.dialogs}>
      <div className={css.dialogs_items}>{dialogElements}</div>
      <div className={css.messages}>{messageElements}</div>
    </div>
  );
};
export default Dialogs;
