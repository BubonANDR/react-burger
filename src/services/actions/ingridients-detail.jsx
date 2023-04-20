import { API_URL } from "../api";
import { getResponse } from "../utils";

export const DELETE_INGRIDIENT_DETAIL = "DELETE_INGRIDIENT_DETAIL";
export const CHOSE_INGRIDIENT_DETAIL = "CHOSE_INGRIDIENT_DETAIL";
export const CHOSE_INGRIDIENT_DETAIL_SUCCESS =
  "CHOSE_INGRIDIENT_DETAIL_SUCCESS";
export const CHOSE_INGRIDIENT_DETAIL_FAILED = "CHOSE_INGRIDIENT_DETAIL_FAILED";




export const choseIngridientDetail = (id) => {
    return function (dispatch) {
      dispatch({
        type: CHOSE_INGRIDIENT_DETAIL,
      });
      fetch(`${API_URL}/ingredients`)
        .then(getResponse)
        .then((res) => {
          if (res) {
            dispatch({
              type: CHOSE_INGRIDIENT_DETAIL_SUCCESS,
              data: res.data.filter((item) => item._id === id),
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
    };
  };
  
  
  
  export const deteteIngridientDetail = () => {
    return function (dispatch) {
      dispatch({
        type: DELETE_INGRIDIENT_DETAIL,
      });
    };
  };
  