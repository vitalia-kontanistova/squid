import { connect } from "react-redux";
import { changeMessageBody, sendBtnClick } from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    messages: state.dialogPage.messages,
    dialogs: state.dialogPage.dialogs,
    newMessageBody: state.dialogPage.newMessageBody,
  };
};

const DialogsContainer = connect(mapStateToProps, {
  changeMessageBody,
  sendBtnClick,
})(Dialogs);
export default DialogsContainer;
