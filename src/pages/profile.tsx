import { Link, Outlet } from "react-router-dom";
import { useRef, useEffect } from "react";

import styles from "./login.module.css";
import { logOut, wsUrl } from "../services/api";
import { useTypedDispatch } from "../hooks/Hooks";
import {
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE,
  WS_SECURED_CONNECTION_START,
} from "../services/actions/wsaction";

const Profile = () => {
  let linkRef = useRef<HTMLAnchorElement>(null);

  const dispatch = useTypedDispatch();

  let linkActive = () => {
  
    dispatch({ type: WS_SECURED_CONNECTION_START, payload: `${wsUrl}` });
    dispatch({ type: WS_GET_MESSAGE });
  };

  useEffect(() => {
    dispatch({ type: WS_SECURED_CONNECTION_START, payload: `${wsUrl}` });
    dispatch({ type: WS_GET_MESSAGE });
    return () => {
      dispatch({ type: WS_CONNECTION_CLOSED });
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.profilelinks}>
        <div className={styles.profilelink}>
          <Link
            to="/profile"
            ref={linkRef}
            className={`text text_type_main-medium ${styles.linktext}`}
            onClick={linkActive}
           
          >
            Профиль
          </Link>
        </div>
        <div className={styles.profilelink}>
          <Link
            to="orders"
            className={`text text_type_main-medium ${styles.linktext}`}
            ref={linkRef}
            onClick={linkActive}
          >
            История заказов
          </Link>
        </div>
        <div className={styles.profilelink}>
          <Link
            to="/login"
            onClick={logOut}
            className={`text text_type_main-medium ${styles.linktext}`}
          >
            Выход
          </Link>
        </div>
        <p>В этом разделе вы можете изменить свои персональные данные</p>
      </div>
      <div className={styles.outlet}>
        <Outlet />
      </div>
    </div>
  );
};

export { Profile };
