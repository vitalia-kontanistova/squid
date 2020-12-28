import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

let withAuthRedirect = (Component) => {
  let RedirectComponent = (props) => {
    if (props.isAuth) return <Component {...props} />;
    else {
      return <Redirect to={"/logIn"} />;
    }
  };

  let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
  });

  RedirectComponent = connect(mapStateToProps)(RedirectComponent);

  return RedirectComponent;
};

export default withAuthRedirect;
