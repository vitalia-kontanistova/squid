const TOGGLE_FOLLOWING = "TOGGLE_FOLLOWING";
const SET_USERS = "SET_USERS";


let usersPage = { users: [] };

const usersReducer = (state = usersPage, action) => {

	switch (action.type) {

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
		case SET_USERS: return { ...state, users: [...state.users, ...action.users] }; // выдает два склееных массива users! WTF???

		default: return state;
	}
};

export const followToggleAC = (userId) => ({ type: TOGGLE_FOLLOWING, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;