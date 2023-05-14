import { IIngrigients } from "../../types/types";

export const ADD_INGRIDIENT:"ADD_INGRIDIENT" = "ADD_INGRIDIENT";
export const MOVE_ITEM:"MOVE_ITEM" = "MOVE_ITEM";
export const DELETE_ITEM:"DELETE_ITEM" = "DELETE_ITEM";
export const RESET_ITEMS:"RESET_ITEMS" = "RESET_ITEMS";

export interface IaddIngrigient{
  type: typeof ADD_INGRIDIENT,
  items:IIngrigients
}
export interface ImoveItem{
  type: typeof MOVE_ITEM,
  items:IIngrigients,
  nn:number;
}

export interface IdeleteItem{
  type: typeof DELETE_ITEM;
  items:IIngrigients
}

export interface IreseteItem{
  type: typeof RESET_ITEMS;
}
 export type TBurgerConstructorActions= IaddIngrigient|IreseteItem |IdeleteItem |ImoveItem 


export const addIngridient = (item:any):IaddIngrigient => {
    return {
      type: ADD_INGRIDIENT,
      items: item,
    };
  };
  
  export const moveItem = (item:any, n:number):ImoveItem => {
    return {
      type: MOVE_ITEM,
      items: item,
      nn: n,
    };
  };
  
  export const deleteItem = (item:any):IdeleteItem => {
    return {
      type: DELETE_ITEM,
      items: item,
    };
  };

  export const resetItems = ():IreseteItem => {
    return {
      type: RESET_ITEMS,
    };
  };