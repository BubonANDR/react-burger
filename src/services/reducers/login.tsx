import { AUTORIZATION,AUTORIZATION_SUCCESS,AUTORIZATION_FAILED, TLoginActions} from "../actions/login";

export interface IloginState{
  isLoading: boolean;
  hasError: boolean
  data: any;
}

export const initialStateLR:IloginState = {
    isLoading: false,
    hasError: false,
    data: {},
  };


export const loginReducer = (state = initialStateLR, action:TLoginActions):IloginState => {
    switch (action.type) {
      case AUTORIZATION: {
        return {
          ...state,
          isLoading: true,
          hasError: false,
        };
      }
  
      case AUTORIZATION_SUCCESS: {
        return {
          ...state,
          data: action.data,
          isLoading: false,
        };
      }
      case AUTORIZATION_FAILED: {
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