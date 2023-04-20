import { API_URL } from "../api";
import { getResponse } from "../utils";

export const GET_STATE = "GET_STATE";
export const GET_STATE_SUCCESS = "GET_STATE_SUCCESS";
export const GET_STATE_FAILED = "GET_STATE_FAILED";


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