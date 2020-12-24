import React from "react";
import { connect } from "react-redux";
import { usersAPI } from "../../api/api";
import Preloader from "../preloader/Preloader";
import {
  follow,
  unfollow,
  isFetchingToggle,
  setCurrentPage,
  setTotalUsers,
  setUsers,
} from "./../../redux/users_reducer";
import Users from "./Users";

class UsersContainer extends React.Component {
  componentDidMount() {
    usersAPI
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then((responce) => {
        this.props.setUsers(responce.items);
        this.props.setTotalUsers(responce.totalCount);
      });
  }

  onPageChange = (page) => {
    this.props.setCurrentPage(page);
    this.props.isFetchingToggle();
    usersAPI.getUsers(page, this.props.pageSize).then((responce) => {
      this.props.isFetchingToggle();
      this.props.setUsers(responce.items);
    });
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
});

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setTotalUsers,
  setCurrentPage,
  isFetchingToggle,
})(UsersContainer);
