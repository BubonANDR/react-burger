import { POST_ORDER,POST_ORDER_SUCCESS,POST_ORDER_FAILED, TOrderActions } from "../actions/order";

export interface IOrderState{
  isLoading: boolean,
  hasError: boolean,
  data: any,
}

const initialState:IOrderState = {
    isLoading: false,
    hasError: false,
    data: {},
  };


export const orderReducer = (state = initialState, action: TOrderActions):IOrderState => {
    switch (action.type) {
      case POST_ORDER: {
        return {
          ...state,
          isLoading: true,
          hasError: false,
        };
      }
  
      case POST_ORDER_SUCCESS: {
        return {
          ...state,
          data: action.data,
          isLoading: false,
        };
      }
      case POST_ORDER_FAILED: {
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