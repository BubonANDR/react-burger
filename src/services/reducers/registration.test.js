
import * as types from "../actions/registration";
import { registrReducer,initialStateRR } from "./registration";

describe("registrReducer", () => {
  it("should return the initial state", () => {
    expect(registrReducer(undefined, { type: "" })).toEqual(initialStateRR);
  });

  it("should handle REGISTRATION", () => {
    expect(
      registrReducer(
        initialStateRR,
        {
          type: types.REGISTRATION,
        }
      )
    ).toEqual({
      isLoading: true,
      hasError: false,
      data: {},
    });
  });

  it("should handle REGISTRATION_SUCCESS", () => {
    expect(
      registrReducer(
        {
          isLoading: true,
          hasError: false,
          data: {},
        },
        {
          type: types.REGISTRATION_SUCCESS,
          data: {
            success: true,
            accessToken: "accessToken",
            refreshToken: "refreshToken",
            user: {
              email: "email",
              name: "name",
            },
          },
        }
      )
    ).toMatchObject({
      isLoading: false,
      hasError: false,
      data: {
        success: true,
        accessToken: "accessToken",
        refreshToken: "refreshToken",
        user: {
          email: "email",
          name: "name",
        },
      },
    });
  });

  it("should handle REGISTRATION_FAILED", () => {
    expect(
      registrReducer(
        {
          isLoading: true,
          hasError: false,
          data: {},
        },
        {
          type: types.REGISTRATION_FAILED,
        }
      )
    ).toEqual({
      isLoading: false,
      hasError: true,
      data: {},
    });
  });

});