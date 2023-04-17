import { loginRequest, makeOrderRequest, registrationRequest } from "../api";
import { setCookie } from "../utils";

export const GET_STATE = "GET_STATE";
export const GET_STATE_SUCCESS = "GET_STATE_SUCCESS";
export const GET_STATE_FAILED = "GET_STATE_FAILED";
export const API_URL = "https://norma.nomoreparties.space/api";
export const ADD_INGRIDIENT = "ADD_INGRIDIENT";
export const MOVE_ITEM = "MOVE_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const RESET_ITEMS = "RESET_ITEMS";
export const DELETE_INGRIDIENT_DETAIL = "DELETE_INGRIDIENT_DETAIL";
export const CHOSE_INGRIDIENT_DETAIL = "CHOSE_INGRIDIENT_DETAIL";
export const CHOSE_INGRIDIENT_DETAIL_SUCCESS = "CHOSE_INGRIDIENT_DETAIL_SUCCESS";
export const CHOSE_INGRIDIENT_DETAIL_FAILED = "CHOSE_INGRIDIENT_DETAIL_FAILED";
export const POST_ORDER = "POST_ORDER";
export const POST_ORDER_SUCCESS = "POST_ORDER_SUCCESS";
export const POST_ORDER_FAILED = "POST_ORDER_FAILED";
export const REGISTRATION = "REGISTRATION";
export const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";
export const REGISTRATION_FAILED = "REGISTRATION_FAILED";
export const AUTORIZATION = "AUTORIZATION";
export const AUTORIZATION_SUCCESS = "AUTORIZATION_SUCCESS";
export const AUTORIZATION_FAILED = "AUTORIZATION_FAILED";




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

export const choseIngridientDetail = (id) => {
  return function (dispatch) {
    dispatch({
    type: CHOSE_INGRIDIENT_DETAIL,
   
  });
  fetch(`${API_URL}/ingredients`)
      .then(res=>res.json())
      .then((res) => {
        if (res) {
          dispatch({
            type: CHOSE_INGRIDIENT_DETAIL_SUCCESS,
            data: res.data.filter((item) => item._id === id)
          });
        } else {
          dispatch({
            type: CHOSE_INGRIDIENT_DETAIL_FAILED,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: CHOSE_INGRIDIENT_DETAIL_FAILED,
        });
      });
  };}











export const resetItems = () => {
  return {
    type: RESET_ITEMS,
  };
};

export const deteteIngridientDetail = () => {
  return function (dispatch) {
    dispatch({
    type: DELETE_INGRIDIENT_DETAIL,
    });
};}

export const getResponse = (res) => {
  if (res) {
    return res.json();
  }
  return Promise.reject(`ОШИБКА: ${res}`);
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
    });

   makeOrderRequest(ingridlist)
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

export const registrAction = (username, email, password) => {
  return function (dispatch) {
    dispatch({
      type: REGISTRATION,
    });
    registrationRequest(username, email, password)
      .then(getResponse)
      .then((res) => {
        if (res) {
          dispatch({
            type: REGISTRATION_SUCCESS,
            data: res,
          });
         setCookie("token", res.accessToken);
         window.localStorage.setItem("refreshtoken", res.refreshToken);
        } else {
          dispatch({
            type: REGISTRATION_FAILED,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: REGISTRATION_FAILED,
        });
      });
  };
};


export const loginAction = ( email, password) => {
  return function (dispatch) {
    dispatch({
      type: AUTORIZATION,
    });
    loginRequest( email, password)
      .then(getResponse)
      .then((res) => {
        if (res) {
          dispatch({
            type: AUTORIZATION_SUCCESS,
            data: res,
          });
          setCookie("token", res.accessToken);
          window.localStorage.setItem("refreshtoken", res.refreshToken);
        } else {
          dispatch({
            type: AUTORIZATION_FAILED,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: AUTORIZATION_FAILED,
        });
      });
  };
};

export const getUserAction = ( email, password) => {
  return function (dispatch) {
    dispatch({
      type: AUTORIZATION,
    });
    loginRequest( email, password)
      .then(getResponse)
      .then((res) => {
        if (res) {
          dispatch({
            type: AUTORIZATION_SUCCESS,
            data: res,
          });
         setCookie("token", res.accessToken);
        } else {
          dispatch({
            type: AUTORIZATION_FAILED,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: AUTORIZATION_FAILED,
        });
      });
  };
};