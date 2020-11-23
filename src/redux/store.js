import dialogsReducer from "./dialogs_reducer";
import profileReducer from "./profile_reducer";
import sidebarReducer from "./sidebar_reducer";

let store = {
	_state: {
		profilePage: {
			postData: [
				{ id: 1, message: "Yo Yo Yo", likes: 5 },
				{ id: 2, message: "Mmmm...", likes: 7 },
				{ id: 3, message: "Zzzz", likes: 3 },
			],
			newPostText: "",
		},
		dialogPage: {
			messages: [
				{ id: 1, message: "Yo" },
				{ id: 2, message: "Kak dela?" },
				{ id: 3, message: "Cho delaesh?" },
			],
			dialogs: [
				{ id: 1, name: "User 1" },
				{ id: 2, name: "User 2" },
				{ id: 3, name: "User 3" },
				{ id: 4, name: "User 4" },
			],
			newMessageBody: "",
		},
		sidebar: {},
	},

	//	get state() { return this._state; },
	getState() { return this._state; },

	_treeRender() { },

	subscribe(observer) { this._treeRender = observer; },

	dispatch(action) {
		this.state.profilePage = profileReducer(this.state.profilePage, action);
		this.state.dialogPage = dialogsReducer(this.state.dialogPage, action);
		this.state.sidebar = sidebarReducer(this.state.sidebar, action);

		this._treeRender(this.state);
	}
};

window.store = store;

export default store;