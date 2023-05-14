import type {  Middleware, MiddlewareAPI } from "redux";
import { AppDispatch } from "../..";
import { RootState } from "../reducers";
import { getCookie } from "../utils";


export const socketMiddleware = (wsUrl: string): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;

    return (next) => (action) => {
      const { dispatch } = store;
      const { type, payload } = action;
      const accessToken = getCookie("token")?.split(" ")[1];

      if (type === "WS_CONNECTION_START") {
        socket = new WebSocket(`${wsUrl}/all`);
      } else if (type === "WS_SECURED_CONNECTION_START") {
        socket = new WebSocket(`${wsUrl}?token=${accessToken}`);
      }

      if (socket) {
       
        socket.onopen = (event) => {
          dispatch({ type: "WS_CONNECTION_SUCCESS", payload: event });
        };

        socket.onerror = (event) => {
          dispatch({ type: "WS_CONNECTION_ERROR", payload: event });
        };

        socket.onmessage = (event) => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          const { success, ...restParsedData } = parsedData;
          dispatch({ type: "WS_GET_MESSAGE", payload: parsedData });
        };

        socket.onclose = (event) => {
          dispatch({ type: "WS_CONNECTION_CLOSED", payload: event });
        };

        if (type === "WS_SEND_MESSAGE") {
          const message = { ...payload, token: accessToken };
          socket.send(JSON.stringify(message));
        }
      }

      next(action);
    };
  }) as Middleware;
};
