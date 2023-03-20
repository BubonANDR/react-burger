
const initialState = {
  breadsState: {
    _id: "60d3b41abdacab0026a733c6",
    type: "bun",
    name: "Краторная булка N-200i",
    image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
    price: 1255,
  },
  burgerParts: [],
};

export const burgConstructReducer = (state = initialState, action) => {
  switch (action.type) {
   
   
    case "ADD_INGRIDIENT": {
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

    case "MOVE_ITEM": {
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

    case "DELETE_ITEM": {
      return {
        ...state,
        burgerParts: [...state.burgerParts].filter(
          (item) => item.id !== action.items.id
        ),
      };
    }

      
    case "RESET_ITEMS":{
      return initialState;
    }


    default: {
      return state;
    }
  }
};
