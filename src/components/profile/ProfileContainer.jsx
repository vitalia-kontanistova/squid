import React, { useEffect } from "react";
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

const ProfileContainer = (props) => {
  let userId = props.match.params.userId || props.userId;

  useEffect(() => {
    props.setUserProfile(userId);
    props.getStatus(userId);
  }, [userId]);

  return <Profile {...props} />;
};

let mapStateToProps = (state) => ({
  profile: getProfile(state),
  userId: getUserId(state),
  status: getStatus(state),
});

export default compose(
  connect(mapStateToProps, {
    setUserProfile: setUserProfileThunkCreator,
    getStatus: getStatusThunkCreator,
    updateStatus: updateStatusThunkCreator,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
