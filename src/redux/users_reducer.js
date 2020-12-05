const TOGGLE_FOLLOWING = "TOGGLE_FOLLOWING";
const SET_USERS = "SET_USERS";
const SET_TOTAL_USERS = "SET_TOTAL_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";


let initialState = {
	users: [],
	currentPage: 1,
	totalUsersCount: 60,
	pageSize: 100,
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USERS: return { ...state, users: action.users }
		case SET_TOTAL_USERS: return { ...state, totalUsersCount: action.totalCount };
		case SET_CURRENT_PAGE: return { ...state, currentPage: action.page };
		case TOGGLE_FOLLOWING: {
			return {
				...state,
				users: state.users.map((user) => {
					if (user.id === action.userId) {
						return { ...user, followed: !user.followed }
					}
					return user;
				})
			};
		}
		default: return state;
	}
};

export const followToggleAC = (userId) => ({ type: TOGGLE_FOLLOWING, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const setTotalUsersAC = (totalCount) => ({ type: SET_TOTAL_USERS, totalCount });
export const setCurrentPageAC = (page) => ({ type: SET_CURRENT_PAGE, page });

export default usersReducer;