import { REGISTRATION,REGISTRATION_SUCCESS,REGISTRATION_FAILED } from "../actions/actions";

const initialState = {
    isLoading: false,
    hasError: false,
    data: {},
  };


export const registrReducer = (state = initialState, action) => {
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