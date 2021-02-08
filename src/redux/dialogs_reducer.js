const SEND_MESSAGE = "SEND_MESSAGE";

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
};

const dialogsReducer = (state = dialogPage, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let id = state.messages.length + 1;
      let message = action.message;
      return { ...state, messages: [...state.messages, { id, message }] };
    default:
      return state;
  }
};

export let sendMessage = (message) => ({ type: SEND_MESSAGE, message });

export default dialogsReducer;
