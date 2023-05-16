import { useEffect } from "react";
import { FeedComponent } from "../components/feed-id/feed-id";
import { useTypedDispatch } from "../hooks/Hooks";
import styles from "./indredients.module.css";
import { WS_CONNECTION_CLOSED, WS_CONNECTION_START, WS_GET_MESSAGE } from "../services/actions/wsaction";
import { wsUrl } from "../services/api";

const OrderPage = () => {
  const dispatch =useTypedDispatch(); 

  useEffect(() => {
    dispatch({ type: WS_CONNECTION_START, payload: `${wsUrl}/all` });
    dispatch({ type: WS_GET_MESSAGE });
    return () => {
      dispatch({ type: WS_CONNECTION_CLOSED });
    };
  }, []);



  return (
    <div className={styles.container}>
      <FeedComponent/>
    </div>
  );
};

export { OrderPage};
