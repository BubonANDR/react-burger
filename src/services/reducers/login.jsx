import { AUTORIZATION,AUTORIZATION_SUCCESS,AUTORIZATION_FAILED} from "../actions/actions";

const initialState = {
    isLoading: false,
    hasError: false,
    data: {},
  };


export const loginReducer = (state = initialState, action) => {
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