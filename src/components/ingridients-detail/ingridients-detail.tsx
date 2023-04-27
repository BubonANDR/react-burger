import  { useEffect } from "react";
import styles from "./ingridients-detail.module.css";
import { useDispatch, useSelector } from "react-redux";
import {  useParams } from "react-router-dom";
import { choseIngridientDetail } from "../../services/actions/ingridients-detail";


const IngredientDetails = () => {
  const { id } = useParams();
  const dispatch:ReturnType<typeof useDispatch | any>= useDispatch();
  const popupItem = useSelector(
    (store:any) => store.ingridPopupReducer.chosenIngrid
  );

  

  useEffect(() => {
    if (!popupItem._id) {
      dispatch(choseIngridientDetail(id));
    }
  }, []);

  return (
    <div className={styles.ingridientPopup}>
    
      <p className={`text text_type_main-large pt-10 pl-10 ${styles.title}`}>
        Детали ингридиента
      </p>
      <img
        src={popupItem.image_large}
        className={styles.picture}
        alt={popupItem.name}
      />
      <p className="text text_type_main-medium pt-4">{popupItem.name}</p>
      <ul className={`${styles.list} pt-8 pb-15`}>
        <li className={styles.listItem}>
          <p className="text text_type_main-default">Калории,ккал</p>
          <p className="text text_type_digits-default">{popupItem.calories}</p>
        </li>
        <li className={styles.listItem}>
          <p className="text text_type_main-default">Белки, г</p>
          <p className="text text_type_digits-default">{popupItem.proteins}</p>
        </li>
        <li className={styles.listItem}>
          <p className="text text_type_main-default">Жиры, г</p>
          <p className="text text_type_digits-default">{popupItem.fat}</p>
        </li>
        <li className={styles.listItem}>
          <p className="text text_type_main-default">Углеводы,г</p>
          <p className="text text_type_digits-default">
            {popupItem.carbohydrates}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default IngredientDetails;