import React from "react";
import DialogItem from "./dialogItem/DialogItem";
import css from "./Dialogs.module.css";
import Message from "./message/Message";

class Dialogs extends React.Component {
  render() {
    let messageElements = this.props.messages.map((message) => (
      <Message message={message.message} key={message.id} />
    ));

    let dialogElements = this.props.dialogs.map((dialog) => (
      <DialogItem id={dialog.id} name={dialog.name} key={dialog.id} />
    ));

    let changeMessageBody = (event) =>
      this.props.changeMessageBody(event.target.value);
    let sendBtnClick = () => this.props.sendBtnClick();

    return (
      <div className={css.dialogs}>
        <div className={css.dialogs_items}>{dialogElements}</div>
        <div className={css.messages}>
          {messageElements}
          <div className={css.textarea}>
            <textarea
              value={this.props.newMessageBody}
              placeholder="O, hi Mark!"
              onChange={changeMessageBody}
            ></textarea>
          </div>
          <button className={css.btn + " " + css.clear_btn}>Clear</button>
          <button
            className={css.btn + " " + css.send_btn}
            onClick={sendBtnClick}
          >
            Send
          </button>
        </div>
      </div>
    );
  }
}

/* 
const Dialogs = (props) => {
  let messageElements = props.messages.map((message) => (
    <Message message={message.message} key={message.id} />
  ));

  let dialogElements = props.dialogs.map((dialog) => (
    <DialogItem id={dialog.id} name={dialog.name} key={dialog.id} />
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
          ></textarea>
        </div>
        <button className={css.btn + " " + css.clear_btn}>Clear</button>
        <button className={css.btn + " " + css.send_btn} onClick={sendBtnClick}>
          Send
        </button>
      </div>
    </div>
  );
};

*/
export default Dialogs;
