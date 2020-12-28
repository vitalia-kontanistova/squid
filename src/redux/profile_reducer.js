import { profileAPI } from "../api/api";

const ADD_POST = "ADD_POST";
const CHANGE_POST = "CHANGE_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let profilePage = {
  postData: [
    { id: 1, message: "Yo Yo Yo", likes: 5 },
    { id: 2, message: "Mmmm...", likes: 7 },
    { id: 3, message: "Zzzz", likes: 3 },
  ],
  newPostText: "",
  profile: null,
};

const profileReducer = (state = profilePage, action) => {
  switch (action.type) {
    case CHANGE_POST:
      return { ...state, newPostText: action.userPost };
    case ADD_POST:
      let message = state.newPostText;
      return {
        ...state,
        postData: [...state.postData, { id: 4, message: message, likes: 0 }],
        newPostText: "",
      };
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
    default:
      return state;
  }
};

export let setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export let changePost = (userPost) => ({
  type: CHANGE_POST,
  userPost: userPost,
});
export let addPost = () => ({ type: ADD_POST });

export const setUserProfileThunkCreator = (userId) => {
  return (dispatch) => {
    profileAPI.setUserProfile(userId).then((response) => {
      dispatch(setUserProfile(response));
    });
  };
};

export default profileReducer;
