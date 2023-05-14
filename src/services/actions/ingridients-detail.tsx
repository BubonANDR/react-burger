import { API_URL } from "../api";
import { getResponse } from "../utils";
import { AppThunk } from "../reducers";
import { AppDispatch } from "../../hooks/Hooks";
import { IIngrigients } from "../../types/types";

export const DELETE_INGRIDIENT_DETAIL:"DELETE_INGRIDIENT_DETAIL" = "DELETE_INGRIDIENT_DETAIL";
export const CHOSE_INGRIDIENT_DETAIL:"CHOSE_INGRIDIENT_DETAIL" = "CHOSE_INGRIDIENT_DETAIL";
export const CHOSE_INGRIDIENT_DETAIL_SUCCESS:"CHOSE_INGRIDIENT_DETAIL_SUCCESS" =
  "CHOSE_INGRIDIENT_DETAIL_SUCCESS";
export const CHOSE_INGRIDIENT_DETAIL_FAILED:"CHOSE_INGRIDIENT_DETAIL_FAILED" = "CHOSE_INGRIDIENT_DETAIL_FAILED";

export interface IDeleteIngredientDetail{
  type:typeof DELETE_INGRIDIENT_DETAIL
}

export interface IChoseIngredientDetail{
  type:typeof CHOSE_INGRIDIENT_DETAIL
}

export interface IChoseIngredientDetailSuccess{
  type:typeof CHOSE_INGRIDIENT_DETAIL_SUCCESS;
  data:IIngrigients[]
}

export interface IChoseIngredientDetailFailed{
  type:typeof CHOSE_INGRIDIENT_DETAIL_FAILED;
}

export type TIngridDetailAction = IChoseIngredientDetail |IChoseIngredientDetailSuccess |IChoseIngredientDetailFailed | IDeleteIngredientDetail

export const choseIngridientDetail= (id:string|undefined):AppThunk => {
    return function (dispatch:AppDispatch) {
      dispatch({
        type: CHOSE_INGRIDIENT_DETAIL,
      });
      fetch(`${API_URL}/ingredients`)
        .then(getResponse)
        .then((res) => {
          if (res) {
            dispatch({
              type: CHOSE_INGRIDIENT_DETAIL_SUCCESS,
              data: res.data.filter((item:IIngrigients) => item._id === id),
            });
          } else {
            dispatch({
              type: CHOSE_INGRIDIENT_DETAIL_FAILED,
            });
          }
        })
        .catch((err) => {
          dispatch({
            type: CHOSE_INGRIDIENT_DETAIL_FAILED,
          });
        });
    };
  };
  
  
  
  export const deteteIngridientDetail = ():AppThunk => {
    return function (dispatch:AppDispatch) {
      dispatch({
        type: DELETE_INGRIDIENT_DETAIL,
      });
    };
  };
  