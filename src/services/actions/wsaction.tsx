export const WS_CONNECTION_START: "WS_CONNECTION_START" = "WS_CONNECTION_START";
export const WS_CONNECTION_SUCCESS: "WS_CONNECTION_SUCCESS" =
  "WS_CONNECTION_SUCCESS";
export const WS_CONNECTION_ERROR: "WS_CONNECTION_ERROR" = "WS_CONNECTION_ERROR";
export const WS_CONNECTION_CLOSED: "WS_CONNECTION_CLOSED" =
  "WS_CONNECTION_CLOSED";
export const WS_GET_MESSAGE: "WS_GET_MESSAGE" = "WS_GET_MESSAGE";
export const WS_SEND_MESSAGE: "WS_SEND_MESSAGE" = "WS_SEND_MESSAGE";

export const WS_SECURED_CONNECTION_START: "WS_SECURED_CONNECTION_START" =
  "WS_SECURED_CONNECTION_START";

interface IwsConnectionStart {
  type: typeof WS_CONNECTION_START;
  payload: string;
}
interface IwsSecuredConnectionStart {
  type: typeof WS_SECURED_CONNECTION_START;
  payload: string;
}

interface IwsConnectionSuccess {
  type: typeof WS_CONNECTION_SUCCESS;
}

interface IwsConnectionError {
  type: typeof WS_CONNECTION_ERROR;
  payload: any | any[];
}

interface IwsConnectionClosed {
  type: typeof WS_CONNECTION_CLOSED;
}

interface IwsGetMessage {
  type: typeof WS_GET_MESSAGE;
  payload: any | any[];
}

interface IwsSendMessage {
  type: typeof WS_SEND_MESSAGE;
  payload: any | any[];
}

export type TWSActions =
  | IwsConnectionStart
  | IwsConnectionSuccess
  | IwsConnectionError
  | IwsConnectionClosed
  | IwsGetMessage
  | IwsSendMessage
  | IwsSecuredConnectionStart;
