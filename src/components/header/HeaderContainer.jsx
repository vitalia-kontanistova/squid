import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setUserData } from "../../redux/auth_reducer";
import { authAPI } from "../../api/api";

class HeaderContainer extends React.Component {
  componentDidMount() {
    authAPI.setUserData().then((response) => {
      if (response.resultCode === 0) {
        let { email, id, login } = response.data;
        // let { email, id, login } = response.data;
        this.props.setUserData(id, email, login);
      }
    });
  }
  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  userId: state.auth.userId,
  email: state.auth.email,
  login: state.auth.login,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { setUserData })(HeaderContainer);
