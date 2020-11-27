const ADD_POST = "ADD_POST";
const CHANGE_POST_TEXTAREA = "CHANGE_POST_TEXTAREA";

let profilePage = {
	postData: [
		{ id: 1, message: "Yo Yo Yo", likes: 5 },
		{ id: 2, message: "Mmmm...", likes: 7 },
		{ id: 3, message: "Zzzz", likes: 3 },
	],
	newPostText: "",
};

const profileReducer = (state = profilePage, action) => {

	switch (action.type) {
		case CHANGE_POST_TEXTAREA: {
			return {
				...state,
				newPostText: action.userPost
			};
		}

		case ADD_POST:
			let message = state.newPostText;
			return {
				...state,
				postData: [
					...state.postData,
					{ id: 4, message: message, likes: 0 }
				],
				newPostText: ""
			};

		default: return state;
	}
}

export let changePostBodyCreator = (userPost) => ({ type: CHANGE_POST_TEXTAREA, userPost: userPost });
export let addPostCreator = () => ({ type: ADD_POST });
export default profileReducer;
