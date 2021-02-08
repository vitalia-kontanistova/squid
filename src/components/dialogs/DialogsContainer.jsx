import { connect } from "react-redux";
import { compose } from "redux";
import { sendMessage } from "../../redux/dialogs_reducer";
import withAuthRedirect from "../../hoc/WithAuthRedirect";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    messages: state.dialogPage.messages,
    dialogs: state.dialogPage.dialogs,
  };
};

export default compose(
  connect(mapStateToProps, { sendMessage }),
  withAuthRedirect
)(Dialogs);
