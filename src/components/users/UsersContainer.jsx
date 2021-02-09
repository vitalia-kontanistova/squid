import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import {
  getCurrentPage,
  getIsFetching,
  getPageSize,
  getToggleFollowingProgress,
  getTotalUsersCount,
  getUsers,
} from "../../redux/users_selectors";
import Preloader from "../preloader/Preloader";
import {
  setCurrentPage,
  getUsersThunkCreator,
  unfollowThunkCreator,
  followThunkCreator,
} from "./../../redux/users_reducer";
import Users from "./Users";

const UsersContainer = (props) => {
  const onPageChange = (page) => {
    props.setCurrentPage(page);
    props.getUsers(page, props.pageSize);
  };

  useEffect(() => {
    props.getUsers(props.currentPage, props.pageSize);
  }, [props.currentPage, props.pageSize]);

  return (
    <>
      {props.isFetching ? (
        <Preloader />
      ) : (
        <Users {...props} onPageChange={onPageChange} />
      )}
    </>
  );
};

let mapStateToProps = (state) => ({
  users: getUsers(state),
  currentPage: getCurrentPage(state),
  totalUsersCount: getTotalUsersCount(state),
  pageSize: getPageSize(state),
  isFetching: getIsFetching(state),
  toggleFollowingProgress: getToggleFollowingProgress(state),
});

export default compose(
  connect(mapStateToProps, {
    follow: followThunkCreator,
    unfollow: unfollowThunkCreator,
    setCurrentPage,
    getUsers: getUsersThunkCreator,
  })
)(UsersContainer);
