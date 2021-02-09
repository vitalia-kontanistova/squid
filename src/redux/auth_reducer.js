import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const SET_SERVER_LOGIN_ERROR = "SET_SERVER_LOGIN_ERROR";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  hasServerLoginError: false,
  serverLoginErrorMessage: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return { ...state, ...action.userData };
    }
    case SET_SERVER_LOGIN_ERROR: {
      return { ...state, ...action.errorData };
    }
    default:
      return state;
  }
};

export let setUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  userData: { userId, email, login, isAuth },
});
export const setServerLoginError = (hasError, errorMessage) => ({
  type: SET_SERVER_LOGIN_ERROR,
  errorData: {
    hasServerLoginError: hasError,
    serverLoginErrorMessage: errorMessage,
  },
});

export const setUserDataThunkCreator = () => (dispatch) => {
  return authAPI.setUserData().then((response) => {
    if (response.resultCode === 0) {
      let { email, id, login } = response.data;
      dispatch(setUserData(id, email, login, true));
    }
  });
};
export const loginThunkCreator = (email, password, rememberMe) => (
  dispatch
) => {
  authAPI.login(email, password, rememberMe, true).then((response) => {
    if (response.resultCode === 0) {
      dispatch(setUserDataThunkCreator());
    } else {
      let error =
        response.messages.length > 0 ? response.messages[0] : "Some error";
      dispatch(setServerLoginError(true, error));
    }
  });
};

export const logoutThunkCreator = () => (dispatch) => {
  authAPI.logout().then((response) => {
    if (response.resultCode === 0) {
      dispatch(setUserData(null, null, null, false));
    } else {
      alert(JSON.stringify(response.messages));
    }
  });
};

export default authReducer;
