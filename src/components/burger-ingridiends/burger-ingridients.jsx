import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import styles from "./burger-ingredients.module.css";
import IngridTab from "../tab/tab";
import IngridientItem from "../ingridient-item.jsx/ingridient-item";
import App from "../app/app";
import IngredientDetails from "../ingridients-detail/ingridients-detail";
import Modal from "../modal/modal";
import PropTypes from 'prop-types';



const BurgerIngredients = ({ props }) => {
  const [currItem, setCurrItem] = React.useState({});
  const [ingridModal, setIngridModal] = React.useState(false);

  const handleIngrid = (e) => {
    setIngridModal(!ingridModal);
    setCurrItem(e);
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
      <IngridTab />
      <div className={styles.ingridientsScrollArea}>
        <div className={`${styles.headline} mt-10 mb-6`}>
          <p className="text text_type_main-medium">Булки</p>
        </div>
        <ol className={`${styles.ingridientBlock} pl-4 pr-4`}>
          {props.map(
            (i) =>
              i.type === "bun" && (
                <li
                  style={{ listStyle: "none" }}
                  key={i._id}
                  onClick={() => handleIngrid(i)}
                >
                  {<IngridientItem props={i} />}
                </li>
              )
          )}
        </ol>
        <div className={`${styles.headline} mt-10 mb-6`}>
          <p className="text text_type_main-medium">Соусы</p>
        </div>
        <ol className={`${styles.ingridientBlock} pl-4 pr-4`}>
          {props.map(
            (i) =>
              i.type === "sauce" && (
                <li
                  style={{ listStyle: "none" }}
                  key={i._id}
                  onClick={() => handleIngrid(i)}
                >
                  {<IngridientItem props={i} />}
                </li>
              )
          )}
        </ol>
        <div className={`${styles.headline} mt-10 mb-6`}>
          <p className="text text_type_main-medium">Начинки</p>
        </div>
        <ol className={`${styles.ingridientBlock} pl-4 pr-4`}>
          {props.map(
            (i) =>
              i.type === "main" && (
                <li
                  style={{ listStyle: "none" }}
                  key={i._id}
                  onClick={() => handleIngrid(i)}
                >
                  {<IngridientItem props={i} />}
                </li>
              )
          )}
        </ol>
      </div>
      <Modal toggle={ingridModal} >
        <IngredientDetails props={currItem} />
      </Modal>
    </section>
  );
};



BurgerIngredients.propTypes={
  props:PropTypes.array,
}

export default BurgerIngredients;
