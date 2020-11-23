import React from "react";
import DialogItem from "./dialogItem/DialogItem";
import css from "./Dialogs.module.css";
import Message from "./message/Message";

const Dialogs = (props) => {
  let messageElements = props.messages.map((message) => (
    <Message message={message.message} />
  ));
  let dialogElements = props.dialogs.map((dialog) => (
    <DialogItem id={dialog.id} name={dialog.name} />
  ));

  let changeMessageBody = (event) =>
    props.changeMessageBody(event.target.value);
  let sendBtnClick = () => props.sendBtnClick();

  return (
    <div className={css.dialogs}>
      <div className={css.dialogs_items}>{dialogElements}</div>
      <div className={css.messages}>
        {messageElements}
        <div className={css.textarea}>
          <textarea
            value={props.newMessageBody}
            placeholder="O, hi Mark!"
            onChange={changeMessageBody}
          >
            {/* {props.newMessageBody} */}
          </textarea>
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
