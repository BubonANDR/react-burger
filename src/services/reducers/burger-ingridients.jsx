import {
  GET_STATE,
  GET_STATE_SUCCESS,
  GET_STATE_FAILED,
} from "../actions/burger-ingridients";

const initialState = {
  isLoading: false,
  hasError: false,
  data: [],
};

export const burgIngridReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STATE: {
      return {
        ...state,
        isLoading: true,
        hasError: false,
      };
    }

    case GET_STATE_SUCCESS: {
      return {
        ...state,
        data: action.data,
        isLoading: false,
      };
    }
    case GET_STATE_FAILED: {
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

