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

  let textareaRef = React.createRef();

  let sendBtnClick = () => {
    let userMessage = textareaRef.current.value;
    alert(userMessage);
    /* O, hi Mark! */
  };

  return (
    <div className={css.dialogs}>
      <div className={css.dialogs_items}>{dialogElements}</div>
      <div className={css.messages}>
        {messageElements}
        <div className={css.textarea}>
          <textarea ref={textareaRef}></textarea>
        </div>
        <button className={css.btn + " " + css.clear_btn}>Clear</button>
        <button className={css.btn + " " + css.send_btn} onClick={sendBtnClick}>
          Send
        </button>
      </div>
    </div>
  );
};
export default Dialogs;
