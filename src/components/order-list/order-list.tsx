import { FC, useEffect } from "react";
import styles from "./order-list.module.css";
import { useTypedDispatch, useTypedSelector } from "../../hooks/Hooks";
import { IOrderitem, OrderItem } from "./order-item";
import {
  WS_CONNECTION_START,
  WS_GET_MESSAGE,
  WS_CONNECTION_CLOSED,
  WS_SECURED_CONNECTION_START,
} from "../../services/actions/wsaction";
import { Spinner } from "../spinner/spinner";

interface IOrderList {
  statusShow: boolean;
}

export interface IordersFromApi {
  success: boolean;
  orders: IOrderitem[];
  total: number;
  totalToday: number;
}

const OrderList: FC<IOrderList> = ({ statusShow }) => {
  const dispatch = useTypedDispatch();

  useEffect(() => {
    statusShow
      ? dispatch({ type: WS_SECURED_CONNECTION_START })
      : dispatch({ type: WS_CONNECTION_START });
    dispatch({ type: WS_GET_MESSAGE });
    return () => {
      dispatch({ type: WS_CONNECTION_CLOSED });
      ordersFromApi.success = false;
    };
  }, []);

  setTimeout(() => dispatch({ type: WS_GET_MESSAGE }), 5000);

  let ordersFromApi: IordersFromApi = useTypedSelector(
    (store) => store.wsReducer.messages
  ).slice(-1)?.[0];

  if (ordersFromApi.success)
    return (
      <div className={`${styles.orderList} pt-25 mb-40`}>
        {ordersFromApi?.orders?.length !== 0 &&
          ordersFromApi.orders.map((item) => {
            return (
              <OrderItem
                key={item._id}
                orderitem={item}
                statusShow={statusShow}
              />
            );
          })}
      </div>
    );
  else
    return (
      <div className={`${styles.orderList} pt-25 mb-40`}>
        <Spinner loadingMessege="Идет загрузка!" />
      </div>
    );
};

export { OrderList };
