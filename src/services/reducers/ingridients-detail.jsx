import { CHOSE_INGRIDIENT_DETAIL, DELETE_INGRIDIENT_DETAIL } from "../actions/actions";
const initialState = {
  chosenIngrid: {},
};

export const ingridPopupReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHOSE_INGRIDIENT_DETAIL: {
      return {
        ...state,
        chosenIngrid: {
          image_large: action.ingridient.image_large,
          name: action.ingridient.name,
          calories: action.ingridient.calories,
          proteins: action.ingridient.proteins,
          fat: action.ingridient.fat,
          carbohydrates: action.ingridient.carbohydrates,
        },
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
