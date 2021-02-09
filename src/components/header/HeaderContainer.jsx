import { connect } from "react-redux";
import Header from "./Header";
import { logoutThunkCreator } from "../../redux/auth_reducer";

let mapStateToProps = (state) => ({
  login: state.auth.login,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {
  logout: logoutThunkCreator,
})(Header);
