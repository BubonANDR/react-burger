import { REGISTRATION,REGISTRATION_SUCCESS,REGISTRATION_FAILED, TRegistationActions } from "../actions/registration";

export interface IregistationState{
  isLoading: boolean,
  hasError: boolean,
  data: any,

}
export const initialStateRR:IregistationState = {
    isLoading: false,
    hasError: false,
    data: {},
  };


export const registrReducer = (state = initialStateRR, action: TRegistationActions):IregistationState => {
    switch (action.type) {
      case REGISTRATION: {
        return {
          ...state,
          isLoading: true,
          hasError: false,
        };
      }
  
      case REGISTRATION_SUCCESS: {
        return {
          ...state,
          data: action.data,
          isLoading: false,
        };
      }
      case REGISTRATION_FAILED: {
        return {
          ...state,
          isLoading: false,
          hasError: true,
        };
      }
      default: {
        return state;
      }
    }
  };