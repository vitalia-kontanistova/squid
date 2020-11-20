let store = {
	state: {
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
		},
		profilePage: {
			postData: [
				{ id: 1, message: "Yo Yo Yo", likes: 5 },
				{ id: 2, message: "Mmmm...", likes: 7 },
				{ id: 3, message: "Zzzz", likes: 3 },
			],
			newPostText: "",
		}
	},

	addPost() {
		debugger;

		let state = this.state;
		let newPost = {
			id: 4,
			message: state.profilePage.newPostText,
			likes: 5
		};

		this.state.profilePage.postData.push(newPost);
		this.state.profilePage.newPostText = "";

		this.treeRender(this.state);
	},

	changePostTextarea(userPost) {
		debugger;

		this.state.profilePage.newPostText = userPost;

		this.treeRender(this.state);

		debugger;

	},

	treeRender() {
		console.log("state changed");
	},

	subscribe(observer) {
		debugger;

		this.treeRender = observer;
	}
};

window.store = store;

export default store;
