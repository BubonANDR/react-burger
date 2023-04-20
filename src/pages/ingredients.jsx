import IngredientDetails from "../components/ingridients-detail/ingridients-detail";
import styles from "./indredients.module.css";

const IngredientPage = () => {
  return (
    <div className={styles.container}>
      <IngredientDetails />
    </div>
  );
};

export { IngredientPage };
