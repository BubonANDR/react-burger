import { useEffect } from "react";
import { FeedComponent } from "../components/feed-id/feed-id";
import { useTypedDispatch } from "../hooks/Hooks";
import styles from "./indredients.module.css";
import { WS_CONNECTION_CLOSED, WS_GET_MESSAGE, WS_SECURED_CONNECTION_START } from "../services/actions/wsaction";
import { wsUrl } from "../services/api";

const OrderPrivatePage = () => {

  const dispatch =useTypedDispatch(); 

  useEffect(() => {
    dispatch({ type: WS_SECURED_CONNECTION_START, payload: `${wsUrl}` });
    dispatch({ type: WS_GET_MESSAGE });
 
  
  }, []);



  return (
    <div className={styles.container}>
      <FeedComponent/>
    </div>
  );
};

export { OrderPrivatePage};