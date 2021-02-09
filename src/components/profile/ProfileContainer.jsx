import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import withAuthRedirect from "../../hoc/WithAuthRedirect";
import {
  setUserProfileThunkCreator,
  getStatusThunkCreator,
  updateStatusThunkCreator,
} from "../../redux/profile_reducer";
import {
  getProfile,
  getStatus,
  getUserId,
} from "../../redux/profile_selectors";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!this.props.match.params.userId) {
      userId = this.props.userId;
    }

    this.props.setUserProfile(userId);
    this.props.getStatus(userId);
  }

  componentDidUpdate() {
    let userId = this.props.match.params.userId;
    if (!this.props.match.params.userId) {
      userId = this.props.userId;
    }

    this.props.setUserProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    return <Profile {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  profile: getProfile(state),
  userId: getUserId(state),
  status: getStatus(state),
});

// let mapStateToProps = (state) => ({
//   profile: state.profilePage.profile,
//   userId: state.auth.userId,
//   status: state.profilePage.status,
// });

export default compose(
  connect(mapStateToProps, {
    setUserProfile: setUserProfileThunkCreator,
    getStatus: getStatusThunkCreator,
    updateStatus: updateStatusThunkCreator,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
