export const ADD_INGRIDIENT = "ADD_INGRIDIENT";
export const MOVE_ITEM = "MOVE_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const RESET_ITEMS = "RESET_ITEMS";



export const addIngridient = (item) => {
    return {
      type: ADD_INGRIDIENT,
      items: item,
    };
  };
  
  export const moveItem = (item, n) => {
    return {
      type: MOVE_ITEM,
      items: item,
      nn: n,
    };
  };
  
  export const deleteItem = (item) => {
    return {
      type: DELETE_ITEM,
      items: item,
    };
  };

  export const resetItems = () => {
    return {
      type: RESET_ITEMS,
    };
  };