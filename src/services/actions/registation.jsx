import { registrationRequest } from "../api";
import { setCookie } from "../utils";

export const REGISTRATION = "REGISTRATION";
export const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";
export const REGISTRATION_FAILED = "REGISTRATION_FAILED";


export const registrAction = (username, email, password) => {
    return function (dispatch) {
      dispatch({
        type: REGISTRATION,
      });
      registrationRequest(username, email, password)
        .then((res) => {
          if (res) {
            dispatch({
              type: REGISTRATION_SUCCESS,
              data: res,
            });
            setCookie("token", res.accessToken);
            window.localStorage.setItem("refreshtoken", res.refreshToken);
          } else {
            dispatch({
              type: REGISTRATION_FAILED,
            });
          }
        })
        .catch((err) => {
          dispatch({
            type: REGISTRATION_FAILED,
          });
        });
    };
  };