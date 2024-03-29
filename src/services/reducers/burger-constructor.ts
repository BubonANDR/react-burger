import { ADD_INGRIDIENT,MOVE_ITEM,DELETE_ITEM,RESET_ITEMS, TBurgerConstructorActions } from "../actions/burger-constructor";


interface IBurgetConstructorState{
  breadsState: {type: string,
  name: string,
  image_mobile: string,
  price: number,
  _id?: string}
  burgerParts: any[] 
}


export const initialStateBCR:IBurgetConstructorState = {
  breadsState: {
    
    type: '',
    name: '',
    image_mobile: '',
    price: 0,
  },
  burgerParts: [] ,
};




export const burgConstructReducer = (state = initialStateBCR, action:TBurgerConstructorActions):IBurgetConstructorState => {
  switch (action.type) {
   
   
    case ADD_INGRIDIENT: {
      return {
        ...state,
        breadsState:
          action.items.type !== "bun"
            ? { ...state.breadsState }
            : {
                _id: action.items._id,
                name: action.items.name,
                price: action.items.price,
                image_mobile: action.items.image_mobile,
                type: action.items.type,
              },

        burgerParts:
          action.items.type !== "bun"
            ? [
                ...state.burgerParts,
                {
                  _id: action.items._id,
                  name: action.items.name,
                  price: action.items.price,
                  image_mobile: action.items.image_mobile,
                  type: action.items.type,
                  id: Math.random().toString(16).slice(2),
                },
              ]
            : [...state.burgerParts],
      };
    }

    case MOVE_ITEM: {
      return {
        ...state,
        burgerParts: [
          ...state.burgerParts.slice(0, action.nn),
          {
            _id: action.items._id,
            name: action.items.name,
            price: action.items.price,
            image_mobile: action.items.image_mobile,
            type: action.items.type,
            id: Math.random().toString(16).slice(2),
          },
          ...state.burgerParts.slice(action.nn),
        ],
      };
    }

    case DELETE_ITEM: {
      return {
        ...state,
        burgerParts: [...state.burgerParts].filter(
          (item) => item.id !== action.items.id
        ),
      };
    }

      
    case RESET_ITEMS:{
      return initialStateBCR;
    }


    default: {
      return state;
    }
  }
};
