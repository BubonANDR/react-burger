import { AnyAction, Dispatch } from "redux";
import { API_URL } from "../api";
import { getResponse } from "../utils";
import { AppDispatch } from "../..";
import { ThunkAction } from "@reduxjs/toolkit";


export const GET_STATE:"GET_STATE" = "GET_STATE";
export const GET_STATE_SUCCESS:"GET_STATE_SUCCESS" = "GET_STATE_SUCCESS";
export const GET_STATE_FAILED:"GET_STATE_FAILED" = "GET_STATE_FAILED";

export interface IGetState{
  type:typeof GET_STATE
}
export interface IGetStateSuccess{
  type:typeof GET_STATE_SUCCESS;
  data: any[];
}
export interface IGetStateFailed{
  type:typeof GET_STATE_FAILED
}

export type TBurgerIngridientAction = IGetState |IGetStateSuccess| IGetStateFailed

export const getStateFromApi = () => {
    return function (dispatch:Dispatch<TBurgerIngridientAction>) {
      dispatch({
        type: GET_STATE,
      });
  
      fetch(`${API_URL}/ingredients`)
        .then(getResponse)
        .then((res) => {
          if (res) {
            dispatch({
              type: GET_STATE_SUCCESS,
              data: res.data,
            });
          } else {
            dispatch({
              type: GET_STATE_FAILED,
            });
          }
        })
        .catch((err) => {
          dispatch({
            type: GET_STATE_FAILED,
          });
        });
    };
  };