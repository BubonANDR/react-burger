import { loginRequest } from "../api";
import { setCookie } from "../utils";
import { AppThunk } from "../reducers";
import { AppDispatch } from "../../hooks/Hooks";

export const AUTORIZATION:"AUTORIZATION" = "AUTORIZATION";
export const AUTORIZATION_SUCCESS:"AUTORIZATION_SUCCESS" = "AUTORIZATION_SUCCESS";
export const AUTORIZATION_FAILED:"AUTORIZATION_FAILED" = "AUTORIZATION_FAILED";



export interface IAutorisationData{
  success: boolean,
  accessToken: string,
  refreshToken: string,
  user: {
    email: string,
    name: string
  }
}



export interface IAutorisation{
type: typeof AUTORIZATION
}

export interface IAutorisationSuccess{
  type: typeof AUTORIZATION_SUCCESS;
  data:IAutorisationData;
  }

  export interface IAutorisationFailed{
    type: typeof AUTORIZATION_FAILED
    }

    export type TLoginActions = IAutorisation |IAutorisationSuccess |IAutorisationFailed


export const loginAction= (email:string, password:string):AppThunk => {
    return async function (dispatch:AppDispatch) {
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
              setCookie("token", res.accessToken);
              window.localStorage.setItem("refreshtoken", res.refreshToken);
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