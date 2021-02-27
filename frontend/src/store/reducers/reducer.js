import * as actions from "../actions/actions";

let initialState = {
  //auth
  token: localStorage.getItem("token") || null,
  isSuperAdmin: localStorage.getItem("isSuperAdmin") || false,
  logout: localStorage.getItem("log") || false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOG_IN:
      return authSuccess(state, action);
    case actions.LOG_OUT:
      return logOut(state, action);
    default:
      return state;
  }
};

function authSuccess(state, action) {
  return {
    ...state,
    token: action.token,
    isSuperAdmin: action.super,
  };
}

function logOut(state, action) {
  return {
    ...state,
    logout: false,
  };
}

export default reducer;
