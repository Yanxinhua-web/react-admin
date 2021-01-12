export function getToken() {
  return localStorage.getItem("token");
}
export function setToken(token) {
  return localStorage.setItem("token", token);
}
export function isLogined(token) {
  return localStorage.getItem("token") ? true : false;
}
