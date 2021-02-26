import * as actions from "../actions/actions";

export const logout = (dispatch) => {
  localStorage.removeItem("token");
  localStorage.removeItem("isSuperAdmin");
  dispatch({ type: actions.LOG_OUT });
  window.location = "/admin";
};
