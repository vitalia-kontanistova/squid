import { connect } from "react-redux";
import LogIn from "./LogIn";
import { loginThunkCreator } from "../../redux/auth_reducer";

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  hasServerLoginError: state.auth.hasServerLoginError,
  serverLoginErrorMessage: state.auth.serverLoginErrorMessage,
});

export default connect(mapStateToProps, { login: loginThunkCreator })(LogIn);
