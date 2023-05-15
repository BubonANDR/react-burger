import { FC, useEffect } from "react";
import styles from "./order-list.module.css";
import { useTypedDispatch, useTypedSelector } from "../../hooks/Hooks";
import { IOrderitem, OrderItem } from "./order-item";
import {
  WS_CONNECTION_START,
  WS_CONNECTION_CLOSED,
  WS_SECURED_CONNECTION_START,
  WS_GET_MESSAGE,
} from "../../services/actions/wsaction";
import { Spinner } from "../spinner/spinner";
import { wsUrl } from "../../services/api";
import { getCookie } from "../../services/utils";

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

  const ordersFromApi: IordersFromApi | undefined = useTypedSelector(
    (store) => store.wsReducer.messages
  ).slice(-1)?.[0];

  useEffect(() => {
    
    return () => {
      dispatch({ type: WS_CONNECTION_CLOSED });
    };
  }, [, statusShow]);

  if (!ordersFromApi) {
    return (
      <div className={`${styles.orderList} pt-25 mb-40`}>
        <Spinner loadingMessege="Идет загрузка!" />
      </div>
    );
  } else {
    return (
      <div className={`${styles.orderList} pt-25 mb-40`}>
        {ordersFromApi?.orders?.length !== 0 &&
          ordersFromApi?.orders?.map((item) => {
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
  }
};

export { OrderList };
