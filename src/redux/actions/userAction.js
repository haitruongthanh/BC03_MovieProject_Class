import { userService } from "../../services/userService";
import { SET_USER_INFOR } from "../constants/userConstants";

export const setUserInforAction = (user) => {
  return {
    type: SET_USER_INFOR,
    payload: user,
  };
};

export const setUserInforActionService = (
  dataLogin,
  handleSuccess = () => {},
  handleFail = () => {}
) => {
  return (dispatch) => {
    userService
      .postDangNhap(dataLogin)
      .then((res) => {
        // console.log("res", res);
        handleSuccess();
        dispatch({
          type: SET_USER_INFOR,
          payload: res.data.content,
        });
      })
      .catch((err) => {
        handleFail();
        console.log("err", err);
      });
  };
};
