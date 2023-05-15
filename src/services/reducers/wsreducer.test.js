
import * as types from "../actions/wsaction";
import { wsReducer,initialStateWSR } from "./wsreducer";


describe("wsReducer", () => {
  it("should return the initial state", () => {
    expect(wsReducer(undefined, { type: "" })).toEqual(initialStateWSR);
  });

 

  it("should handle WS_CONNECTION_SUCCESS", () => {
    expect(
      wsReducer(
        initialStateWSR,
        {
          type: types.WS_CONNECTION_SUCCESS,
         
        }
      )
    ).toEqual({
      
        wsConnected: true,
        messages:[]
    });
  });

  it("should handle WS_CONNECTION_ERROR", () => {
    expect(
      wsReducer(
        {
            wsConnected: false,
            messages: []
        },
        {
          type: types.WS_CONNECTION_ERROR,
          payload:"Error"
        }
      )
    ).toEqual({
        error: "Error",
        wsConnected: false,
        messages:[]
    });
  });

  it("should handle WS_GET_MESSAGE", () => {
    expect(
      wsReducer(
        {
            wsConnected: true,
            messages: []
        },
        {
          type: types.WS_GET_MESSAGE,
          payload:"Message 1"
        }
      )
    ).toEqual({
        wsConnected: true,
        messages:["Message 1"]
    });
  });

  it("should handle WS_CONNECTION_CLOSED", () => {
    expect(
      wsReducer(
        {
            wsConnected: true,
            messages: ["1","2"]
        },
        {
          type: types.WS_CONNECTION_CLOSED,
         
        }
      )
    ).toEqual({
      
        wsConnected: false,
        error: undefined,
        messages:["1","2"]
    });
  });

});