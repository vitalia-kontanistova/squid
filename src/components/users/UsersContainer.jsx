import * as axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Preloader from "../preloader/Preloader";
import {
  followToggleAC,
  isFetchingToggleAC,
  setCurrentPageAC,
  setTotalUsersAC,
  setUsersAC,
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
    let jsx = (
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

    return jsx;
  }
}

let mapStateToProps = (state) => ({
  users: state.usersPage.users,
  currentPage: state.usersPage.currentPage,
  totalUsersCount: state.usersPage.totalUsersCount,
  pageSize: state.usersPage.pageSize,
  isFetching: state.usersPage.isFetching,
});
let mapDispatchToProps = (dispatch) => ({
  followToggle: (userId) => dispatch(followToggleAC(userId)),
  setUsers: (users) => dispatch(setUsersAC(users)),
  setTotalUsers: (totalUsers) => dispatch(setTotalUsersAC(totalUsers)),
  setCurrentPage: (page) => dispatch(setCurrentPageAC(page)),
  isFetchingToggle: () => dispatch(isFetchingToggleAC()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
