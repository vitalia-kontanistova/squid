import { connect } from "react-redux";
import {
  changeMessageBodyCreator,
  sendMessageCreator,
} from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    messages: state.dialogPage.messages,
    dialogs: state.dialogPage.dialogs,
    newMessageBody: state.dialogPage.newMessageBody,
  };
};

let mapDispatchToProps = (dispatch) => ({
  changeMessageBody: (body) => {
    return dispatch(changeMessageBodyCreator(body));
  },
  sendBtnClick: () => {
    return dispatch(sendMessageCreator());
  },
});

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;
