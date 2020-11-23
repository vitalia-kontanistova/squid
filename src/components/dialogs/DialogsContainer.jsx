import React from "react";
import {
  changeMessageBodyCreator,
  sendMessageCreator,
} from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let changeMessageBody = (body) =>
    props.dispatch(changeMessageBodyCreator(body));
  let sendBtnClick = () => props.dispatch(sendMessageCreator());

  return (
    <Dialogs
      messages={props.dialogPage.messages}
      dialogs={props.dialogPage.dialogs}
      newMessageBody={props.dialogPage.newMessageBody}
      changeMessageBody={changeMessageBody}
      sendBtnClick={sendBtnClick}
    />
  );
};
export default DialogsContainer;
