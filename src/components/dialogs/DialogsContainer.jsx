import { connect } from "react-redux";
import { compose } from "redux";
import withAuthRedirect from "../../hoc/WithAuthRedirect";
import { changeMessageBody, sendBtnClick } from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    messages: state.dialogPage.messages,
    dialogs: state.dialogPage.dialogs,
    newMessageBody: state.dialogPage.newMessageBody,
  };
};

export default compose(
  connect(mapStateToProps, { changeMessageBody, sendBtnClick }),
  withAuthRedirect
)(Dialogs);
