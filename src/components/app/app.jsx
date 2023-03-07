import React from "react";
import AppHeader from "../app-header/app-header";
import styles from "./app.module.css";
import BurgerIngredients from "../burger-ingridiends/burger-ingridients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import ReactDOM from "react-dom/client";
import {} from "@ya.praktikum/react-developer-burger-ui-components";

function App() {
  const [imgState, setImgState] = React.useState({
    isLoading: false,
    hasError: false,
    data: [],
  });
  const API_URL = "https://norma.nomoreparties.space/api/ingredients";
  const getResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`ОШИБКА: ${res.status}`);
  };
  const getState = () => {
    setImgState({ ...imgState, hasError: false, isLoading: true });
    fetch(API_URL)
      .then(getResponse)
      .then((rslt) =>
        setImgState({ ...imgState, data: rslt.data, isLoading: false })
      )
      .catch((err) => {
        setImgState({ ...imgState, hasError: true, isLoading: false });
        console.log(` ${err}`);
      });
  };
  React.useEffect(() => {
    getState();
  }, []);

  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.page}>
        {!imgState.isLoading && imgState.data.length && (
          <BurgerIngredients props={imgState.data} />
        )}
        {!imgState.isLoading && imgState.data.length && (
          <BurgerConstructor props={imgState.data} />
        )}
      </main>
    </div>
  );
}



export default App;
