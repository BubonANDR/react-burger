import React from "react";
import PropTypes from 'prop-types'
import styles from "./ingridients-detail.module.css";

const IngredientDetails = ({ props }) => {
  return (
    <div className={styles.ingridientPopup}>
      <p className={`text text_type_main-large pt-10 pl-10 ${styles.title}`}>
        Детали ингридиента
      </p>
      <img
        src={props.image_large}
        className={styles.picture}
        alt={props.name}
      />
      <p className="text text_type_main-medium pt-4">{props.name}</p>
      <ul className={`${styles.list} pt-8 pb-15`}>
        <li className={styles.listItem} >
          <p className="text text_type_main-default">Калории,ккал</p>
          <p className="text text_type_digits-default">{props.calories}</p>
        </li>
        <li className={styles.listItem} >
          <p className="text text_type_main-default">Белки, г</p>
          <p className="text text_type_digits-default">{props.proteins}</p>
        </li>
        <li className={styles.listItem} >
          <p className="text text_type_main-default">Жиры, г</p>
          <p className="text text_type_digits-default">{props.fat}</p>
        </li>
        <li className={styles.listItem} >
          <p className="text text_type_main-default">Углеводы,г</p>
          <p className="text text_type_digits-default">{props.carbohydrates}</p>
        </li>
      </ul>
    </div>
  );
};

IngredientDetails.propTypes = {
  price: PropTypes.number,
  image_large: PropTypes.node,
  name: PropTypes.string,
  calories: PropTypes.number,
  fat: PropTypes.number,
  carbohydrates: PropTypes.number,
  proteins: PropTypes.number,
};

export default IngredientDetails;
