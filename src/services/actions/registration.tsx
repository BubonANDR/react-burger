import { registrationRequest } from "../api";
import { setCookie } from "../utils";
import { AppThunk } from "../reducers";
import { AppDispatch } from "../../hooks/Hooks";

export const REGISTRATION:"REGISTRATION" = "REGISTRATION";
export const REGISTRATION_SUCCESS:"REGISTRATION_SUCCESS" = "REGISTRATION_SUCCESS";
export const REGISTRATION_FAILED:"REGISTRATION_FAILED" = "REGISTRATION_FAILED";

export interface IRegistrationData{
  success: boolean,
  user: {
      email: string,
      name: string
  },
  accessToken: string,
  refreshToken: string

}

export interface IRegistration{
  type: typeof REGISTRATION
}

export interface IRegistrationSuccess{
  type: typeof REGISTRATION_SUCCESS;
  data: IRegistrationData
}
export interface IRegistrationFailed{
  type: typeof REGISTRATION_FAILED
}

export type TRegistationActions = IRegistration | IRegistrationSuccess | IRegistrationFailed


export const registrAction = (username:string, email:string, password:string):AppThunk => {
    return function (dispatch:AppDispatch) {
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