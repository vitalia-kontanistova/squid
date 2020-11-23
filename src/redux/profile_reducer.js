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
		case CHANGE_POST_TEXTAREA:
			state.newPostText = action.userPost;
			return state;

		case ADD_POST:
			let newPost = { id: 4, message: state.newPostText, likes: 5 };
			state.postData.push(newPost);
			state.newPostText = "";
			return state;

		default: return state;
	}
}

export let changePostBodyCreator = (userPost) => ({ type: CHANGE_POST_TEXTAREA, userPost: userPost });
export let addPostCreator = () => ({ type: ADD_POST });
export default profileReducer;
