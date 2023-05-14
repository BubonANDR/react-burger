import itemStyles from "./ingridient-item.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { FC } from "react";
import { useDrag } from "react-dnd";
import { IIngrigients } from "../../types/types";


export interface IIngridientItem  {
  currentitem:IIngrigients;
  counter:number;

}

const IngridientItem:FC<IIngridientItem> = ( {currentitem, counter} ) => {
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
      style={{ opacity: isDrag ? 0.2 :1}}
      data-cy={`dragitem_${currentitem._id}`}
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
        <CurrencyIcon type="primary"  />
      </div>
      <div className={itemStyles.name}>
        <p>{currentitem.name}</p>
      </div>
    </div>
  );
};



export default IngridientItem;
