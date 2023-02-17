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
    <section className={styles.appHeaderStyle}>
      <div className={styles.headerContent}>
        <div className={styles.headerNavigation}>
          <AppHeaderButton
            name="Конструктор"
            icon={<BurgerIcon type="primary" />}
            style={styles.constructor}
          />
          <AppHeaderButton
            name="Лента заказов"
            icon={<ListIcon type="primary" />}
            style={styles.orderList}
          />
        </div>
        <Logo />
     
        <AppHeaderButton
            name="Личный кабинет"
            icon={<ProfileIcon type="primary"/>}
            style={styles.headerProfile}
          />
        
      </div>
    </section>
  );
}

export default AppHeader;
