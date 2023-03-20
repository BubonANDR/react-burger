import { combineReducers } from "redux";
import { burgIngridReducer } from "./burger-ingridients";
import { burgConstructReducer } from "./burger-constructor";
import { ingridPopupReducer } from "./ingridients-detail";

export default combineReducers({
  burgIngridReducer,
  burgConstructReducer,
  ingridPopupReducer,
});
