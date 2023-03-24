import React from "react";
import AppHeader from "../app-header/app-header";
import styles from "./app.module.css";
import BurgerIngredients from "../burger-ingridiends/burger-ingridients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import {} from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector, useDispatch } from "react-redux";
import { getStateFromApi } from "../../services/actions/actions";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getStateFromApi());
  }, []);

  const imgState = useSelector((store) => store.burgIngridReducer);

  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.page}>
        <DndProvider backend={HTML5Backend}>
          {!imgState.isLoading && imgState.data.length && (
            <>
              <BurgerIngredients />
              <BurgerConstructor />
            </>
          )}
        </DndProvider>
      </main>
    </div>
  );
}

export default App;
