import { AnyAction, combineReducers } from "redux";
import { burgIngridReducer } from "./burger-ingridients";
import { burgConstructReducer } from "./burger-constructor";
import { ingridPopupReducer } from "./ingridients-detail";
import { orderReducer } from "./order";
import { registrReducer } from "./registration";
import { loginReducer } from "./login";
import { wsReducer } from "./wsreducer";
import { ThunkAction} from "redux-thunk";


export const rootReducer = combineReducers({
  burgIngridReducer,
  burgConstructReducer,
  ingridPopupReducer,
  orderReducer,
  registrReducer,
  loginReducer,
  wsReducer
});

export type RootState = ReturnType <typeof rootReducer>

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>