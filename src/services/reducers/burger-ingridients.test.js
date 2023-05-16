import * as types from "../actions/burger-ingridients";
import { burgIngridReducer, initialStateBIC } from "./burger-ingridients";
import { testIngidients } from "./test";

describe("burgIngridReducer", () => {
  it("should return the initial state", () => {
    expect(burgIngridReducer(undefined, { type: "" })).toEqual(initialStateBIC);
  });

  it("should handle Get_State", () => {
    expect(
      burgIngridReducer(
        { isLoading: false, hasError: false, data: [] },
        {
          type: types.GET_STATE,
        }
      )
    ).toEqual({ isLoading: true, hasError: false, data: [] });
  });

  it("should handle Get_State_Success", () => {
    expect(
      burgIngridReducer(
        { isLoading: true, hasError: false, data: [] },
        {
          type: types.GET_STATE_SUCCESS,
          data: testIngidients,
        }
      )
    ).toEqual({ isLoading: false, hasError: false, data: testIngidients });
  });
  it("should handle Get_State_Failed", () => {
    expect(
      burgIngridReducer(
        { isLoading: true, hasError: false, data: [] },
        {
          type: types.GET_STATE_FAILED,
        }
      )
    ).toEqual({ isLoading: false, hasError: true, data: [] });
  });
});
