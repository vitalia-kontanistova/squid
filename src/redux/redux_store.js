import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs_reducer";
import profileReducer from "./profile_reducer";
import sidebarReducer from "./sidebar_reducer";

let reducers = combineReducers({
	profilePage: profileReducer,
	dialogPage: dialogsReducer,
	sidebar: sidebarReducer
});

let store = createStore(reducers);

window.store = store;

export default store;