import { Dispatch } from "redux";
import { makeOrderRequest } from "../api";

export const POST_ORDER:"POST_ORDER" = "POST_ORDER";
export const POST_ORDER_SUCCESS:"POST_ORDER_SUCCESS" = "POST_ORDER_SUCCESS";
export const POST_ORDER_FAILED:"POST_ORDER_FAILED" = "POST_ORDER_FAILED";

export interface IPostOrder {
  type : typeof POST_ORDER
}

export interface IPostOrderSuccess {
  type : typeof POST_ORDER_SUCCESS;
  data :any;
}

export interface IPostOrderFailed {
  type : typeof POST_ORDER_FAILED
}

export type  TOrderActions = IPostOrder |IPostOrderSuccess |IPostOrderFailed





export const postOrderToApi = (ingridlist:any[]) => {
    return function (dispatch: Dispatch<TOrderActions>) {
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