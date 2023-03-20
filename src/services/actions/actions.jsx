export const GET_STATE = "GET_STATE";
export const GET_STATE_SUCCESS = "GET_STATE_SUCCESS";
export const GET_STATE_FAILED = "GET_STATE_FAILED";
export const API_URL = "https://norma.nomoreparties.space/api/ingredients";

export const ADD_INGRIDIENT = (item) => {
  return {
    type: "ADD_INGRIDIENT",
    items: item,
  };
};

export const MOVE_ITEM = (item, n) => {
  return {
    type: "MOVE_ITEM",
    items: item,
    nn: n,
  };
};

export const DELETE_ITEM = (item) => {
  return {
    type: "DELETE_ITEM",
    items: item,
  };
};
export const RESET_ITEMS = () => {
  return {
    type: "RESET_ITEMS"
     };
};


export const CHOISE_INGRIDIENT_DETAIL = (item) => {
  return {
    type: "CHOISE_INGRIDIENT_DETAIL",
    ingridient: item,
  };
};

export const DELETE_INGRIDIENT_DETAIL = () => {
  return { type: "DELETE_INGRIDIENT_DETAIL" };
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

    fetch(API_URL)
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
