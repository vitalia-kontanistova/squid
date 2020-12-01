import { connect } from "react-redux";
import { followToggleAC, setUsersAC } from "./../../redux/users_reducer";
import Users from "./Users";

let mapStateToProps = (state) => ({
  users: state.usersPage.users,
});

let mapDispatchToProps = (dispatch) => ({
  followToggle: (userId) => dispatch(followToggleAC(userId)),
  setUsers: (users) => dispatch(setUsersAC(users)),
});

debugger;

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

debugger;

export default UsersContainer;
