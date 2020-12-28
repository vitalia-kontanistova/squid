import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return { ...state, ...action.userData, isAuth: true };
    }

    default:
      return state;
  }
};

export let setUserData = (userId, email, login) => ({
  type: SET_USER_DATA,
  userData: { userId, email, login },
});

export const setUserDataThunkCreator = () => {
  return (dispatch) => {
    authAPI.setUserData().then((response) => {
      if (response.resultCode === 0) {
        let { email, id, login } = response.data;
        dispatch(setUserData(id, email, login));
      }
    });
  };
};

export default authReducer;
