export const logout = (dispatch) => {
  localStorage.removeItem("token");
  localStorage.removeItem("isSuperAdmin");
  window.location = "/admin";
};
