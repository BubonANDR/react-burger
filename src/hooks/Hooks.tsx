import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState } from "../services/reducers";
import {  store } from "..";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";



export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export type TypedDispatch<T> = ThunkDispatch <T, any, AnyAction>;

export type AppDispatch = typeof store.dispatch

export const useTypedDispatch = () => useDispatch<TypedDispatch<RootState>>();
