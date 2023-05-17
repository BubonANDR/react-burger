import { loginReducer, initialStateLR } from "./login";
import * as types from "../actions/login";

const userSuccessData = {
  success: true,
  accessToken: "accessToken",
  refreshToken: "refreshToken",
  user: {
    email: "email",
    name: "name",
  },
};

describe("loginReducer", () => {
  it("should return the initial state", () => {
    expect(loginReducer(undefined, { type: "" })).toEqual(initialStateLR);
  });

  it("should handle AUTORIZATION", () => {
    expect(
      loginReducer(initialStateLR, {
        type: types.AUTORIZATION,
      })
    ).toEqual({
      isLoading: true,
      hasError: false,
      data: {},
    });
  });

  it("should handle AUTORIZATION_SUCCESS", () => {
    expect(
      loginReducer(
        {
          isLoading: true,
          hasError: false,
          data: {},
        },
        {
          type: types.AUTORIZATION_SUCCESS,
          data: userSuccessData,
        }
      )
    ).toMatchObject({
      isLoading: false,
      hasError: false,
      data: userSuccessData,
    });
  });

  it("should handle AUTORIZATION_FAILED", () => {
    expect(
      loginReducer(
        {
          isLoading: true,
          hasError: false,
          data: {},
        },
        {
          type: types.AUTORIZATION_FAILED,
        }
      )
    ).toEqual({
      isLoading: false,
      hasError: true,
      data: {},
    });
  });
});
