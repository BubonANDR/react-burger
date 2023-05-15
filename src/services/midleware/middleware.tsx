import type { Middleware, MiddlewareAPI } from "redux";
import { RootState } from "../reducers";
import { getCookie } from "../utils";
import { AppDispatch } from "../../hooks/Hooks";


type TwsActionsProp={
  wsInit:any,
  wsSendMessage:any,
  wsSecuredInit:any,
  onOpen:any,
  onClose:any,
  onError:any,
  onMessage:any,
}

export const socketMiddleware = (wsActions:TwsActionsProp): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;
    const accessToken = getCookie("token")?.split(" ")[1];
    return (next) => (action) => {
      const { dispatch } = store;
      const { type, payload } = action;
      const {
        wsInit,
        wsSendMessage,
        wsSecuredInit,
        onOpen,
        onClose,
        onError,
        onMessage,
      } = wsActions;

       if (type === wsSecuredInit) {
        socket = new WebSocket(`${payload}?token=${accessToken}`)
      } else if (type === wsInit) {
        socket = new WebSocket(`${payload}`)
      }
      

      if (socket) {
        socket.onopen = (event) => {
          dispatch({ type: onOpen, payload: event });
        };

        socket.onerror = (event) => {
          dispatch({ type: onError, payload: event });
        };

        socket.onmessage = (event) => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          const { success, ...restParsedData } = parsedData;
          dispatch({ type: onMessage, payload: parsedData });
        };

        socket.onclose = (event) => {
          dispatch({ type: onClose, payload: event });
        };

        if (type === wsSendMessage) {
          const message = { ...payload, token: accessToken };
          socket.send(JSON.stringify(message));
        }
      }

      next(action);
    };
  }) as Middleware;
};
