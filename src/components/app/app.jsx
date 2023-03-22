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
  const stateCallback = React.useCallback(()=>dispatch(getStateFromApi()),[getStateFromApi])
  React.useEffect(() => {
    stateCallback()
  }, [stateCallback]);

  const imgState = useSelector((store) => store.burgIngridReducer);

  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.page}>
        <DndProvider backend={HTML5Backend}>
          {!imgState.isLoading && imgState.data.length && (
            <BurgerIngredients props={imgState.data} />
          )}
          {!imgState.isLoading && imgState.data.length && (
            <BurgerConstructor props={imgState.data} />
          )}
        </DndProvider>
      </main>
    </div>
  );
}

export default App;
