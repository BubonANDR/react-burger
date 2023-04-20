import { makeOrderRequest } from "../api";

export const POST_ORDER = "POST_ORDER";
export const POST_ORDER_SUCCESS = "POST_ORDER_SUCCESS";
export const POST_ORDER_FAILED = "POST_ORDER_FAILED";

export const postOrderToApi = (ingridlist) => {
    return function (dispatch) {
      dispatch({
        type: POST_ORDER,
      });
  
      makeOrderRequest(ingridlist)
        .then((res) => {
          if (res) {
            dispatch({
              type: POST_ORDER_SUCCESS,
              data: res,
            });
          } else {
            dispatch({
              type: POST_ORDER_FAILED,
            });
          }
        })
        .catch((err) => {
          dispatch({
            type: POST_ORDER_FAILED,
          });
        });
    };
  };