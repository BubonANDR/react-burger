import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState } from "../services/reducers";
import { AppDispatch } from "..";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

type TypedDispatch<T> = ThunkDispatch<T, any, AnyAction>;

export const useTypedDispatch = () => useDispatch<TypedDispatch<AppDispatch>>();
