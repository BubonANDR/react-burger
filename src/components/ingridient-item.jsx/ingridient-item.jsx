import itemStyles from "./ingridient-item.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { useDrag } from "react-dnd";

const IngridientItem = ({ currentitem, counter }) => {
  const [{ isDrag }, dragRef] = useDrag({
    type: currentitem.type,
    item: currentitem,
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  return (
    <div
      className={itemStyles.item}
      ref={dragRef}
      style={{ opacity: isDrag && 0.2 }}
    >
      {counter > 0 && !isDrag && (
        <Counter count={counter} size="default" extraClass="m-1"/>
      )}
      <img
        src={currentitem.image}
        className={itemStyles.itemImage}
        alt={currentitem.name}
      />
      <div className={itemStyles.price}>
        <p className="text text_type_digits-default">{currentitem.price}</p>
        <CurrencyIcon type="primary" alt="&#9733;" />
      </div>
      <div className={itemStyles.name}>
        <p>{currentitem.name}</p>
      </div>
    </div>
  );
};

IngridientItem.propTypes = {
  counter: PropTypes.number,
  currentitem:PropTypes.object,
};

export default IngridientItem;
