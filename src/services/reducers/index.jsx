import { combineReducers } from "redux";
import { burgIngridReducer } from "./burger-ingridients";
import { burgConstructReducer } from "./burger-constructor";
import { ingridPopupReducer } from "./ingridients-detail";
import { orderReducer } from "./order";


export default combineReducers({
  burgIngridReducer,
  burgConstructReducer,
  ingridPopupReducer,
  orderReducer
});
