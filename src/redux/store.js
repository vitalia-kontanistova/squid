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

  getState() {
    return this._state;
  },

  _treeRender() {},

  subscribe(observer) {
    this._treeRender = observer;
  },

  dispatch(action) {
    this.getState().profilePage = profileReducer(
      this.getState().profilePage,
      action
    );
    this.getState().dialogPage = dialogsReducer(
      this.getState().dialogPage,
      action
    );
    this.getState().sidebar = sidebarReducer(this.getState().sidebar, action);

    this._treeRender(this.state);
  },
};

export default store;
