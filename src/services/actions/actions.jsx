export const GET_STATE = "GET_STATE";
export const GET_STATE_SUCCESS = "GET_STATE_SUCCESS";
export const GET_STATE_FAILED = "GET_STATE_FAILED";
export const API_URL = "https://norma.nomoreparties.space/api";
export const ADD_INGRIDIENT = "ADD_INGRIDIENT";
export const MOVE_ITEM = "MOVE_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const RESET_ITEMS =  "RESET_ITEMS";
export const DELETE_INGRIDIENT_DETAIL ="DELETE_INGRIDIENT_DETAIL";
export const CHOSE_INGRIDIENT_DETAIL ="CHOSE_INGRIDIENT_DETAIL";
export const POST_ORDER = "POST_ORDER";
export const POST_ORDER_SUCCESS = "POST_ORDER_SUCCESS";
export const POST_ORDER_FAILED = "POST_ORDER_FAILED";






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

export const choseIngridientDetail = (item) => {
  return {
    type: CHOSE_INGRIDIENT_DETAIL,
    ingridient: item,
  };
};
export const resetItems = () => {
  return {
    type: RESET_ITEMS,
   };
};
export const deteteIngridientDetail= () => {
  return {
    type: DELETE_INGRIDIENT_DETAIL,
   };
};

export const getResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`ОШИБКА: ${res.status}`);
};

export const getStateFromApi = () => {
  return function (dispatch) {
    dispatch({
      type: GET_STATE,
    });

    fetch(`${API_URL}/ingredients`)
      .then(getResponse)
      .then((res) => {
        if (res) {
          dispatch({
            type: GET_STATE_SUCCESS,
            data: res.data,
          });
        } else {
          dispatch({
            type: GET_STATE_FAILED,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: GET_STATE_FAILED,
        });
      });
  };
};


export const postOrderToApi = (ingridlist) => {
  return function (dispatch) {
    dispatch({
      type: POST_ORDER,
    })

    fetch(`${API_URL}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ingredients: ingridlist}),
    })
      .then(getResponse)
      .then((res) => {
        if (res) {
          dispatch({
            type: POST_ORDER_SUCCESS,
            data: res,
          });
        } else {
          dispatch({
            type: POST_ORDER_FAILED,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: POST_ORDER_FAILED,
        });
      });
  };
};
