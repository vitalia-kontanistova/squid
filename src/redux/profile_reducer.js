const ADD_POST = "ADD_POST";
const CHANGE_POST_TEXTAREA = "CHANGE_POST_TEXTAREA";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_IS_FETCHING_TRUE = "SET_IS_FETCHING_TRUE";

let profilePage = {
	postData: [
		{ id: 1, message: "Yo Yo Yo", likes: 5 },
		{ id: 2, message: "Mmmm...", likes: 7 },
		{ id: 3, message: "Zzzz", likes: 3 },
	],
	newPostText: "",
	profile: null,
	isFetching: false,
};

const profileReducer = (state = profilePage, action) => {

	switch (action.type) {
		case CHANGE_POST_TEXTAREA:
			return { ...state, newPostText: action.userPost };
		case ADD_POST:
			let message = state.newPostText;
			return {
				...state,
				postData: [...state.postData, { id: 4, message: message, likes: 0 }],
				newPostText: ""
			};
		case SET_USER_PROFILE:
			return { ...state, profile: action.profile };
		case SET_IS_FETCHING_TRUE:
			return { ...state, isFetching: true };
		default: return state;
	}
}

export let setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export let changePostBodyCreator = (userPost) => ({ type: CHANGE_POST_TEXTAREA, userPost: userPost });
export let addPostCreator = () => ({ type: ADD_POST });
export let setIsFetchingTrue = () => ({ type: SET_IS_FETCHING_TRUE });

export default profileReducer;
