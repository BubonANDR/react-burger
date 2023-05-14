import type { Middleware, MiddlewareAPI } from "redux";
import { RootState } from "../reducers";
import { getCookie } from "../utils";
import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_GET_MESSAGE,
  WS_SECURED_CONNECTION_START,
  WS_SEND_MESSAGE,
} from "../actions/wsaction";
import { AppDispatch } from "../../hooks/Hooks";

export const socketMiddleware = (): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;
    const accessToken = getCookie("token")?.split(" ")[1];
    return (next) => (action) => {
      const { dispatch } = store;
      const { type, payload } = action;

      if (type === WS_CONNECTION_START) {
        socket = new WebSocket(`${payload}`);
      } else if (type === WS_SECURED_CONNECTION_START) {
        socket = new WebSocket(`${payload}?token=${accessToken}`);
      }

      if (socket) {
        socket.onopen = (event) => {
          dispatch({ type: WS_CONNECTION_SUCCESS, payload: event });
        };

        socket.onerror = (event) => {
          dispatch({ type: WS_CONNECTION_ERROR, payload: event });
        };

        socket.onmessage = (event) => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          const { success, ...restParsedData } = parsedData;
          dispatch({ type: WS_GET_MESSAGE, payload: parsedData });
        };

        socket.onclose = (event) => {
          dispatch({ type: WS_CONNECTION_CLOSED, payload: event });
        };

        if (type === WS_SEND_MESSAGE) {
          const message = { ...payload, token: accessToken };
          socket.send(JSON.stringify(message));
        }
      }

      next(action);
    };
  }) as Middleware;
};
