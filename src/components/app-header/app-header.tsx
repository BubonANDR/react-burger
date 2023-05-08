import { Link } from "react-router-dom";
import styles from "./app-header-styles.module.css";
import AppHeaderButton from "../header-button/app-header-button";
import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { FC } from "react";

const AppHeader: FC = () => {
  return (
    <header className={styles.appHeaderStyle}>
      <div className={styles.headerContent}>
        <div className={styles.headerNavigation}>
          <Link to="/" style={{ color: "white" }}>
            <AppHeaderButton
              name="Конструктор"
              icon={<BurgerIcon type="primary" />}
              style={styles.constructor}
            />
          </Link>
          <Link to="/profile/order-list" style={{ color: "white" }}>
            <AppHeaderButton
              name="Лента заказов"
              icon={<ListIcon type="primary" />}
              style={styles.orderList}
            />
          </Link>
        </div>
        <Logo />

        <Link to="/profile" style={{ color: "white" }}>
          <AppHeaderButton
            name="Личный кабинет"
            icon={<ProfileIcon type="primary" />}
            style={styles.headerProfile}
          />
        </Link>
      </div>
    </header>
  );
};

export default AppHeader;
