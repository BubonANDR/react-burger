import React from "react";
import styles from "./burger-ingredients.module.css";
import IngridTab from "../tab/tab";
import IngridientItem from "../ingridient-item.jsx/ingridient-item";
import IngredientDetails from "../ingridients-detail/ingridients-detail";
import Modal from "../modal/modal";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  CHOISE_INGRIDIENT_DETAIL,
} from "../../services/actions/actions";

const BurgerIngredients = () => {
  const [ingridModal, setIngridModal] = React.useState(false);
  const dispatch = useDispatch();
  const itemsList = useSelector((store) => store.burgIngridReducer.data);
  const chosenItems = useSelector(
    (store) => store.burgConstructReducer.burgerParts
  );
  const chosenBreads = useSelector(
    (store) => store.burgConstructReducer.breadsState
  );
  


  const handleIngrid = (e) => {
    setIngridModal(!ingridModal);
  };

  React.useEffect(() => {
    return () => {
      setIngridModal(false);
    };
  }, [handleIngrid]);

  
 


  return (
    <section className={`${styles.burgerIngrStyle} pt-10 mb-10`}>
      <div className={`${styles.title} pb-5`}>
        <h1 className="text text_type_main-large">Соберите бургер</h1>
      </div>
      <IngridTab  />
      <div className={styles.ingridientsScrollArea} id ="scrl">
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
                  onClick={() => (
                    handleIngrid(i),
                    dispatch(CHOISE_INGRIDIENT_DETAIL(i))
                  )}
                >
                  
                  {<IngridientItem props={i} 
                 counter ={
                  chosenBreads._id===i._id ? 2: 0
                 }
                  />}
                  
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
                  onClick={() => (
                    handleIngrid(i),
                    dispatch(CHOISE_INGRIDIENT_DETAIL(i))
                  )}
                >
                  {<IngridientItem props={i} 
                 counter ={
                  chosenItems.filter((item)=>item._id===i._id).length
                 }
                  />}
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
                  onClick={() => (
                    handleIngrid(i),
                    dispatch(CHOISE_INGRIDIENT_DETAIL(i))
                    
                  )}
                >
                  {<IngridientItem props={i} 
                 counter ={
                  chosenItems.filter((item)=>item._id===i._id).length
                 }
                  />}
                </li>
              )
          )}
        </ol>
      </div>
      <Modal toggle={ingridModal}>
        <IngredientDetails />
      </Modal>
    </section>
  );
};

BurgerIngredients.propTypes = {
  props: PropTypes.array,
};

export default BurgerIngredients;
