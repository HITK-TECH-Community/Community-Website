export const logout = (dispatch) => {
  localStorage.removeItem("token");
  localStorage.removeItem("isSuperAdmin");
  localStorage.setItem("log", true);
  localStorage.removeItem("firstName");
  localStorage.removeItem("email");
  localStorage.removeItem("phone");
  window.location = "/admin";
};
