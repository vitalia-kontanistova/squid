import * as axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Preloader from "../preloader/Preloader";
import {
  followToggle,
  isFetchingToggle,
  setCurrentPage,
  setTotalUsers,
  setUsers,
} from "./../../redux/users_reducer";
import Users from "./Users";

class UsersContainer extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((responce) => {
        this.props.setUsers(responce.data.items);
        this.props.setTotalUsers(responce.data.totalCount);
      });
  }

  onPageChange = (page) => {
    this.props.setCurrentPage(page);
    this.props.isFetchingToggle();
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
      )
      .then((responce) => {
        this.props.isFetchingToggle();
        this.props.setUsers(responce.data.items);
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
            followToggle={this.props.followToggle}
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
  followToggle,
  setUsers,
  setTotalUsers,
  setCurrentPage,
  isFetchingToggle,
})(UsersContainer);
