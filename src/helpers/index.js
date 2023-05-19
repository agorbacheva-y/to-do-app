// check if user is in local storage

export const authenticate = () => {
  // if we can get item from users db
  if (localStorage.getItem("user")) {
    return JSON.parse(localStorage.getItem("user"));
  } else {
    return false;
  }
};