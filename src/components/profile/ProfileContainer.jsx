import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setUserProfileThunkCreator } from "../../redux/profile_reducer";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId || this.props.userId;
    this.props.setUserProfile(userId);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  userId: state.auth.userId,
});

export default connect(mapStateToProps, {
  setUserProfile: setUserProfileThunkCreator,
})(withRouter(ProfileContainer));
