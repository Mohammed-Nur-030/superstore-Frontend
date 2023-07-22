export const base_url="https://superstore-api.onrender.com/api/"

const getTokenFromLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

  

export const config = {
  headers: {
    Authorization: `Bearer ${
      getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
    }`,
    Accept: "application/json",
  },
};
 