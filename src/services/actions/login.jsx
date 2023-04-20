import { loginRequest } from "../api";

export const AUTORIZATION = "AUTORIZATION";
export const AUTORIZATION_SUCCESS = "AUTORIZATION_SUCCESS";
export const AUTORIZATION_FAILED = "AUTORIZATION_FAILED";


export const loginAction = (email, password) => {
    return async function (dispatch) {
      dispatch({
        type: AUTORIZATION,
      });
      loginRequest(email, password)
        .then((res) => {
          if (res) {
       
              dispatch({
                type: AUTORIZATION_SUCCESS,
                data: res,
              });
          } else {
            dispatch({
              type: AUTORIZATION_FAILED,
            });
          }
        })
        .catch((err) => {
          dispatch({
            type: AUTORIZATION_FAILED,
          });
        });
    };
  };