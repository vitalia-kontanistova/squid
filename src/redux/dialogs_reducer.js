const SEND_MESSAGE = "SEND_MESSAGE";
const CHANGE_MESSAGE_TEXTAREA = "CHANGE_MESSAGE_TEXTAREA";

let dialogPage = {
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
};

const dialogsReducer = (state = dialogPage, action) => {
	switch (action.type) {

		case CHANGE_MESSAGE_TEXTAREA:
			return {
				...state,
				newMessageBody: action.body
			};

		case SEND_MESSAGE: {
			let body = state.newMessageBody;
			return {
				...state,
				newMessageBody: "",
				messages: [...state.messages, { id: 4, message: body }]
			};
		}

		default: return state;

	}
}

export let changeMessageBodyCreator = (body) => ({ type: CHANGE_MESSAGE_TEXTAREA, body: body });
export let sendMessageCreator = () => ({ type: SEND_MESSAGE });
export default dialogsReducer;

