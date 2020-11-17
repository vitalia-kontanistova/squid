import React from "react";
import DialogItem from "./dialogItem/DialogItem";
import css from "./Dialogs.module.css";
import Message from "./message/Message";

const Dialogs = () => {
  let messages = [
    { id: 1, message: "Yo" },
    { id: 2, message: "Kak dela?" },
    { id: 3, message: "Cho delaesh?" },
  ];

  let messageElements = messages.map((message) => (
    <Message message={message.message} />
  ));

  let dialogs = [
    { id: 1, name: "User 1" },
    { id: 2, name: "User 2" },
    { id: 3, name: "User 3" },
    { id: 4, name: "User 4" },
  ];

  let dialogElements = dialogs.map((dialog) => (
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
