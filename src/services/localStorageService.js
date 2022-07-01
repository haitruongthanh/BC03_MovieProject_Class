let USER = "user";

export const localStorageService = {
  setUserInfor: (user) => {
    let dataJson = JSON.stringify(user);
    localStorage.setItem(USER, dataJson);
  },
  getUserInfor: () => {
    let dataJson = localStorage.getItem(USER);

    if (dataJson) {
      return JSON.parse(dataJson);
    } else {
      return null;
    }
  },
  removeUserInfor: () => {
    localStorage.removeItem(USER);
  },
};
