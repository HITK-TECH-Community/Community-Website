export const logout = (dispatch) => {
  localStorage.removeItem("token");
  localStorage.removeItem("isSuperAdmin");
  localStorage.setItem("log", true);
  window.location = "/admin";
};
