import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import withAuthRedirect from "../../hoc/WithAuthRedirect";
import Preloader from "../preloader/Preloader";
import {
  setCurrentPage,
  getUsersThunkCreator,
  unfollowThunkCreator,
  followThunkCreator,
} from "./../../redux/users_reducer";
import Users from "./Users";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChange = (page) => {
    this.props.setCurrentPage(page);
    this.props.getUsers(page, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChange={this.onPageChange}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            toggleFollowingProgress={this.props.toggleFollowingProgress}
          />
        )}
      </>
    );
  }
}

let mapStateToProps = (state) => ({
  users: state.usersPage.users,
  currentPage: state.usersPage.currentPage,
  totalUsersCount: state.usersPage.totalUsersCount,
  pageSize: state.usersPage.pageSize,
  isFetching: state.usersPage.isFetching,
  toggleFollowingProgress: state.usersPage.toggleFollowingProgress,
});

// export default connect(mapStateToProps, {
//   follow: followThunkCreator,
//   unfollow: unfollowThunkCreator,
//   setCurrentPage,
//   getUsers: getUsersThunkCreator,
// })(UsersContainer);

export default compose(
  connect(mapStateToProps, {
    follow: followThunkCreator,
    unfollow: unfollowThunkCreator,
    setCurrentPage,
    getUsers: getUsersThunkCreator,
  }),
  withAuthRedirect
)(UsersContainer);
