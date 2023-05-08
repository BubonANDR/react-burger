import { Link, Outlet} from "react-router-dom";
import {  useRef, useEffect } from "react";

import styles from "./login.module.css";
import {
  logOut,
 } from "../services/api";


const Profile = () => {
 
  
  const linkRef = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
   
     linkRef?.current?.focus();
  }, []);

  const linkActive =() =>{
    linkRef?.current?.focus();
  }

  return (
    <div className={styles.container}>
      <div className={styles.profilelinks}>
        <div className={styles.profilelink}>
          <Link
            to="/profile"
            ref={linkRef}
            className={`text text_type_main-medium ${styles.linktext}`}
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
        <Outlet/>
        </div>
       

    </div>
  );
};

export { Profile };
