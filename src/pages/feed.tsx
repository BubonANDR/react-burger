import { FC, useEffect } from "react";
import { IordersFromApi, OrderList } from "../components/order-list/order-list";
import feedstyles from "./feed.module.css";
import { useTypedDispatch, useTypedSelector } from "../hooks/Hooks";
import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_START,
  WS_GET_MESSAGE,
} from "../services/actions/wsaction";
import { Spinner } from "../components/spinner/spinner";
import { wsUrl } from "../services/api";


const Feed: FC = () => {
  const dispatch = useTypedDispatch();
  let ordersFromApi: IordersFromApi = useTypedSelector(
    (store) => store.wsReducer.messages
  ).slice(-1)?.[0];

  
  useEffect(() => {
    dispatch({ type: WS_CONNECTION_START, payload:`${wsUrl}/all` });
    dispatch({ type: WS_GET_MESSAGE });
    return () => {
      dispatch({ type: WS_CONNECTION_CLOSED });
    };
  }, []);



  if (!ordersFromApi) {
    return (
      <div className={`${feedstyles.oderlist}`}>
      
      </div>
    );
  } else {
    return (
      <div className={feedstyles.page}>
        <p className={`${feedstyles.header} text text_type_main-large`}>
          Лента заказов{" "}
        </p>
        <div className={feedstyles.oderlist}>
          <OrderList statusShow={false} />
        </div>
        <div className={feedstyles.stateswindow}>
          <div className={feedstyles.ordersBoard}>
            <div className={feedstyles.ordersInProgress}>
              <p className="text text_type_main-medium">Готовы:</p>
              <ul
                className={`${feedstyles.list} ${feedstyles.done} text text_type_digits-default`}
              >
                {ordersFromApi?.orders?.length !== 0 &&
                  ordersFromApi?.orders?.map((item, n) => {
                    if (item.status === "done")
                      return (<li key={n}>{item.number}</li>)
                  })}
              </ul>
            </div>
            <div className={feedstyles.ordersInProgress}>
              <p className="text text_type_main-medium">В работе:</p>
              <ul
                className={`${feedstyles.list} text text_type_digits-default`}
              >
                {ordersFromApi?.orders?.length !== 0 &&
                  ordersFromApi?.orders?.map((item) => {
                    if (item.status !== "done") return (<li>{item.number}</li>)
                  })}
              </ul>
            </div>
          </div>
          <div className={feedstyles.complitted}>
            <p className="text text_type_main-medium">
              Выполнено за все время:
            </p>
            <p
              className={`${feedstyles.doneCount} text text_type_digits-large`}
            >
              {ordersFromApi?.total}
            </p>
          </div>
          <div className={feedstyles.complitted}>
            <p className="text text_type_main-medium">Выполнено за сегодня:</p>
            <p
              className={`${feedstyles.doneCount} text text_type_digits-large`}
            >
              {ordersFromApi?.totalToday}
            </p>
          </div>
        </div>
      </div>
    );}

};

export { Feed };
