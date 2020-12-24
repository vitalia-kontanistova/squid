const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_TOTAL_USERS = "SET_TOTAL_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
  users: [],
  currentPage: 1,
  totalUsersCount: 60,
  pageSize: 100,
  isFetching: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: action.users };
    case SET_TOTAL_USERS:
      return { ...state, totalUsersCount: action.totalCount };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.page };
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: !state.isFetching };
    }
    default:
      return state;
  }
};

export const isFetchingToggle = () => ({ type: TOGGLE_IS_FETCHING });
export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setTotalUsers = (totalCount) => ({
  type: SET_TOTAL_USERS,
  totalCount,
});
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page });

export default usersReducer;
