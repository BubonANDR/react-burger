import { Dispatch } from "redux";
import { registrationRequest } from "../api";
import { setCookie } from "../utils";

export const REGISTRATION:"REGISTRATION" = "REGISTRATION";
export const REGISTRATION_SUCCESS:"REGISTRATION_SUCCESS" = "REGISTRATION_SUCCESS";
export const REGISTRATION_FAILED:"REGISTRATION_FAILED" = "REGISTRATION_FAILED";


export interface IRegistration{
  type: typeof REGISTRATION
}

export interface IRegistrationSuccess{
  type: typeof REGISTRATION_SUCCESS;
  data: any
}
export interface IRegistrationFailed{
  type: typeof REGISTRATION_FAILED
}

export type TRegistationActions = IRegistration | IRegistrationSuccess | IRegistrationFailed


export const registrAction = (username:string, email:string, password:string) => {
    return function (dispatch:Dispatch<TRegistationActions>) {
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