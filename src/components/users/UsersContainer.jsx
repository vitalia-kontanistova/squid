import { connect } from "react-redux";
import {
  followToggleAC,
  setCurrentPageAC,
  setTotalUsersAC,
  setUsersAC,
} from "./../../redux/users_reducer";
import Users from "./Users";

let mapStateToProps = (state) => ({
  users: state.usersPage.users,
  currentPage: state.usersPage.currentPage,
  totalUsersCount: state.usersPage.totalUsersCount,
  pageSize: state.usersPage.pageSize,
});

let mapDispatchToProps = (dispatch) => ({
  followToggle: (userId) => dispatch(followToggleAC(userId)),
  setUsers: (users) => dispatch(setUsersAC(users)),
  setTotalUsers: (totalUsers) => dispatch(setTotalUsersAC(totalUsers)),
  setCurrentPage: (page) => dispatch(setCurrentPageAC(page)),
});

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
