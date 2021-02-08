import { profileAPI } from "../api/api";

const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const SEND_POST = "SEND_POST";

let profilePage = {
  postData: [
    { id: 1, message: "Yo Yo Yo", likes: 5 },
    { id: 2, message: "Mmmm...", likes: 7 },
    { id: 3, message: "Zzzz", likes: 3 },
  ],
  profile: null,
  status: "",
};

const profileReducer = (state = profilePage, action) => {
  switch (action.type) {
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
    case SET_STATUS:
      return { ...state, status: action.status };
    case SEND_POST:
      let id = state.postData.length + 1;
      let message = action.post;
      let likes = Math.round(Math.random() * 10);
      return {
        ...state,
        postData: [...state.postData, { id, message, likes }],
      };
    default:
      return state;
  }
};

export let setStatus = (status) => ({ type: SET_STATUS, status });
export let setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const sendPost = (post) => ({ type: SEND_POST, post });
export const setUserProfileThunkCreator = (userId) => {
  return (dispatch) => {
    profileAPI.setUserProfile(userId).then((response) => {
      dispatch(setUserProfile(response));
    });
  };
};
export const getStatusThunkCreator = (userId) => (dispatch) => {
  profileAPI
    .getStatus(userId)
    .then((response) => dispatch(setStatus(response)));
};
export const updateStatusThunkCreator = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((response) => {
    if (response.resultCode === 0) dispatch(setStatus(status));
  });
};

export default profileReducer;
