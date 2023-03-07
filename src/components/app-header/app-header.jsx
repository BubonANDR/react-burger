import React from "react";
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
          <AppHeaderButton
            name="Конструктор"
            icon={<BurgerIcon type="primary" alt="Бургер"/>}
            style={styles.constructor}
          />
          <AppHeaderButton
            name="Лента заказов"
            icon={<ListIcon type="primary" alt="Список"/>}
            style={styles.orderList}
          />
        </div>
        <Logo alt="Stellar burger"/>

        <AppHeaderButton
          name="Личный кабинет"
          icon={<ProfileIcon type="primary" alt="ЛК"/>}
          style={styles.headerProfile}
        />
      </div>
    </header>
  );
}

export default AppHeader;
