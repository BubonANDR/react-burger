import styles from "./burger-ingredients.module.css";
import IngridTab from "../tab/tab";
import IngridientItem from "../ingridient-item.jsx/ingridient-item";
import { useDispatch, useSelector } from "react-redux";
import {
  choseIngridientDetail,
  } from "../../services/actions/actions";
import { useLocation, useNavigate, } from "react-router-dom";

const BurgerIngredients = () => {
  const navigate =useNavigate();
  const location =useLocation();
  const dispatch = useDispatch();

  const itemsList = useSelector((store) => store.burgIngridReducer.data);
  const chosenItems = useSelector(
    (store) => store.burgConstructReducer.burgerParts
  );
  const chosenBreads = useSelector(
    (store) => store.burgConstructReducer.breadsState
  );

 

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
            (i) =>
              i.type === "bun" && (
                <li
                  style={{ listStyle: "none" }}
                  key={i._id}
                  onClick={() => {dispatch(choseIngridientDetail(i._id),
                    navigate(`/ingredients/${i._id}`,{state:{ background: location }})
                    );                    
                  }}
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
                  onClick={() => {dispatch(choseIngridientDetail(i._id),
                    navigate(`/ingredients/${i._id}`,{state:{ background: location }})
                    );                    
                  }}
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
                  onClick={() => {dispatch(choseIngridientDetail(i._id),
                    navigate(`/ingredients/${i._id}`,{state:{ background: location }})
                    );                    
                  }}
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
