
import * as types from "../actions/order";
import { orderReducer } from "./order";
import { testOrder } from "./test";

describe("orderReducer", () => {
  it("should return the initial state", () => {
    expect(orderReducer(undefined, { type: "" })).toEqual({
      isLoading: false,
      hasError: false,
      data: {},
    });
  });

  it("should handle POST_ORDER", () => {
    expect(
      orderReducer(
        {
          isLoading: false,
          hasError: false,
          data: {},
        },
        {
          type: types.POST_ORDER,
        }
      )
    ).toEqual({
      isLoading: true,
      hasError: false,
      data: {},
    });
  });

  it("should handle POST_ORDER_SUCCESS", () => {
    expect(
      orderReducer(
        {
          isLoading: true,
          hasError: false,
          data: {},
        },
        {
          type: types.POST_ORDER_SUCCESS,
          data: testOrder
        }
      )
    ).toMatchObject({
      isLoading: false,
      hasError: false,
      data: testOrder
    });
  });

  it("should handle POST_ORDER_FAILED", () => {
    expect(
      orderReducer(
        {
          isLoading: true,
          hasError: false,
          data: {},
        },
        {
          type: types.POST_ORDER_FAILED,
        }
      )
    ).toEqual({
      isLoading: false,
      hasError: true,
      data: {},
    });
  });

});