import { setUserDataThunkCreator } from "./auth_reducer";

const INITIALIZE = "INITIALIZE";

let initialState = {
  isInitialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE:
      return { ...state, isInitialized: true };
    default:
      return state;
  }
};

export const initialize = () => ({ type: INITIALIZE });
export const initializeThunkCreator = () => (dispatch) => {
  dispatch(setUserDataThunkCreator()).then(() => {
    dispatch(initialize());
  });
};

export default appReducer;
