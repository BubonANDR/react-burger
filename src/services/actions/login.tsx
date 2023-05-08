import { Dispatch } from "redux";
import { loginRequest } from "../api";

export const AUTORIZATION:"AUTORIZATION" = "AUTORIZATION";
export const AUTORIZATION_SUCCESS:"AUTORIZATION_SUCCESS" = "AUTORIZATION_SUCCESS";
export const AUTORIZATION_FAILED:"AUTORIZATION_FAILED" = "AUTORIZATION_FAILED";

export interface IAutorisation{
type: typeof AUTORIZATION
}

export interface IAutorisationSuccess{
  type: typeof AUTORIZATION_SUCCESS;
  data:any;
  }

  export interface IAutorisationFailed{
    type: typeof AUTORIZATION_FAILED
    }

    export type TLoginActions = IAutorisation |IAutorisationSuccess |IAutorisationFailed


export const loginAction = (email:string, password:string) => {
    return async function (dispatch:Dispatch<TLoginActions>) {
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