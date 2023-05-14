import { makeOrderRequest } from "../api";
import { AppThunk } from "../reducers";
import { AppDispatch } from "../../hooks/Hooks";

export const POST_ORDER: "POST_ORDER" = "POST_ORDER";
export const POST_ORDER_SUCCESS: "POST_ORDER_SUCCESS" = "POST_ORDER_SUCCESS";
export const POST_ORDER_FAILED: "POST_ORDER_FAILED" = "POST_ORDER_FAILED";
export const RESET_ORDER: "RESET_ORDER" = "RESET_ORDER";

export interface IPostOrderData {
  name: string;
  order: {
    createdAt: string;
    ingredients: any[];
    name: string;
    number: number;
    owner: {
      name: string;
      email: string;
      createdAt: string;
      updatedAt: string;
    };
    price: number;
    status: string;
    updatedAt: string;
    _id: string;
  };
  success: boolean;
}

export interface IPostOrder {
  type: typeof POST_ORDER;
}

export interface IPostOrderSuccess {
  type: typeof POST_ORDER_SUCCESS;
  data: IPostOrderData;
}

export interface IPostOrderFailed {
  type: typeof POST_ORDER_FAILED;
}

export interface IResetOrder {
  type: typeof RESET_ORDER;
}

export type TOrderActions =
  | IPostOrder
  | IPostOrderSuccess
  | IPostOrderFailed
  | IResetOrder;

export const postOrderToApi = (ingridlist: any[]): AppThunk => {
  return function (dispatch: AppDispatch) {
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
          console.log(res);
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
