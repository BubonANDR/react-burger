import { Link } from "react-router-dom";
import styles from "./app-header-styles.module.css";
import AppHeaderButton from "../header-button/app-header-button";
import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";


function AppHeader() {
  return (
    <header className={styles.appHeaderStyle}>
      <div className={styles.headerContent}>
        <div className={styles.headerNavigation}>
        <Link to="/" style={{color:"white"}} onClick={(e)=>e.target.focus()} >
          <AppHeaderButton
            name="Конструктор"
            icon={<BurgerIcon type="primary" alt="Бургер"/>}
            style={styles.constructor}
          />
          </Link>
          <Link to="/profile/order-list" style={{color:"white"}} onClick={(e)=>e.target.focus()} >
          <AppHeaderButton 
            name="Лента заказов"
            icon={<ListIcon type="primary" alt="Список"/>}
            style={styles.orderList}
          />
          </Link>
        </div>
        <Logo alt="Stellar burger"   />

        <Link to="/profile" style={{color:"white"}} onClick={(e)=>e.target.focus()}>
        <AppHeaderButton
          name="Личный кабинет"
          icon={<ProfileIcon type="primary" alt="ЛК"/>}
          style={styles.headerProfile}
              />
         </Link>     
      </div>
    </header>
  );
}

export default AppHeader;
