import styles from "./burger-ingredients.module.css";
import IngridTab from "../tab/tab";
import IngridientItem from "../ingridient-item/ingridient-item";
import { useDispatch, useSelector } from "react-redux";

import { useLocation, useNavigate } from "react-router-dom";
import { choseIngridientDetail } from "../../services/actions/ingridients-detail";
import { IIngrigients } from "../../types/types";
import { FC } from "react";

const BurgerIngredients: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch: ReturnType<typeof useDispatch | any> = useDispatch();

  const itemsList: IIngrigients[] = useSelector(
    (store: any) => store.burgIngridReducer.data
  );
  const chosenItems: IIngrigients[] = useSelector(
    (store: any) => store.burgConstructReducer.burgerParts
  );
  const chosenBreads: IIngrigients = useSelector(
    (store: any) => store.burgConstructReducer.breadsState
  );

  const clickHandle = (i: IIngrigients) => {
    dispatch(choseIngridientDetail(i._id));

    navigate(`/ingredients/${i._id}`, { state: { background: location } });
  };

  return (
    <section className={`${styles.burgerIngrStyle} pt-10 mb-10`}>
      <div className={`${styles.title} pb-5`}>
        <h1 className="text text_type_main-large">Соберите бургер</h1>
      </div>
      <IngridTab />
      <div className={styles.ingridientsScrollArea} id="scrl">
        <div className={`${styles.headline} mt-10 mb-6`}>
          <p className="text text_type_main-medium">Булки</p>
        </div>
        <ol className={`${styles.ingridientBlock} pl-4 pr-4`}>
          {itemsList.map(
            (i: IIngrigients) =>
              i.type === "bun" && (
                <li
                  style={{ listStyle: "none" }}
                  key={i._id}
                  onClick={() => clickHandle(i)}
                >
                  {
                    <IngridientItem
                      currentitem={i}
                      counter={chosenBreads._id === i._id ? 2 : 0}
                   
                    />
                  }
                </li>
              )
          )}
        </ol>
        <div className={`${styles.headline} mt-10 mb-6`}>
          <p className="text text_type_main-medium">Соусы</p>
        </div>
        <ol className={`${styles.ingridientBlock} pl-4 pr-4`}>
          {itemsList.map(
            (i) =>
              i.type === "sauce" && (
                <li
                  style={{ listStyle: "none" }}
                  key={i._id}
                  onClick={() => clickHandle(i)}
                >
                  {
                    <IngridientItem
                      currentitem={i}
                      counter={
                        chosenItems.filter((item) => item._id === i._id).length
                      }
                    />
                  }
                </li>
              )
          )}
        </ol>
        <div className={`${styles.headline} mt-10 mb-6`}>
          <p className="text text_type_main-medium">Начинки</p>
        </div>
        <ol className={`${styles.ingridientBlock} pl-4 pr-4`}>
          {itemsList.map(
            (i) =>
              i.type === "main" && (
                <li
                  style={{ listStyle: "none" }}
                  key={i._id}
                  onClick={() => clickHandle(i)}
                >
                  {
                    <IngridientItem
                      currentitem={i}
                      counter={
                        chosenItems.filter((item) => item._id === i._id).length
                      }
                    />
                  }
                </li>
              )
          )}
        </ol>
      </div>
    </section>
  );
};

export default BurgerIngredients;
