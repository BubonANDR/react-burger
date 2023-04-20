import {
  CHOSE_INGRIDIENT_DETAIL,
  CHOSE_INGRIDIENT_DETAIL_FAILED,
  CHOSE_INGRIDIENT_DETAIL_SUCCESS,
  DELETE_INGRIDIENT_DETAIL,
} from "../actions/ingridients-detail";
const initialState = {
  chosenIngrid: {},
};

export const ingridPopupReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHOSE_INGRIDIENT_DETAIL: {
      return {
        ...state,
        isLoading: true,
        hasError: false,
      };
    }

    case CHOSE_INGRIDIENT_DETAIL_SUCCESS: {
      return {
        ...state,
        chosenIngrid: action.data[0],
        isLoading: false,
      };
    }
    case CHOSE_INGRIDIENT_DETAIL_FAILED: {
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    }

    case DELETE_INGRIDIENT_DETAIL: {
      return {
        ...state,
        chosenIngrid: {},
      };
    }

    default: {
      return state;
    }
  }
};
