import { IIngrigients } from "../../types/types";
import {
  GET_STATE,
  GET_STATE_SUCCESS,
  GET_STATE_FAILED,
  TBurgerIngridientAction,
} from "../actions/burger-ingridients";

interface IburgerIngridState{
  isLoading: boolean,
  hasError: boolean,
  data: IIngrigients[],
}

export const initialStateBIC:IburgerIngridState = {
  isLoading: false,
  hasError: false,
  data: [],
};

export const burgIngridReducer = (state = initialStateBIC, action:TBurgerIngridientAction):IburgerIngridState => {
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

