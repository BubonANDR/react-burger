import React from "react";
import itemStyles from "./ingridient-item.module.css";
import { CurrencyIcon,Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';

const IngridientItem = ({props}) => {
  return (
    <div className={itemStyles.item}>
      <Counter count={1} size="default" extraClass="m-1" />
      <img src={props.image} className={itemStyles.itemImage} />
      <div className={itemStyles.price}>
        <p className="text text_type_digits-default">{props.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <div className={itemStyles.name}>
        <p>{props.name}</p>
      </div>
    </div>
  );
};

IngridientItem.propTypes ={
  price:PropTypes.number,
  image:PropTypes.node,
  name:PropTypes.string
}

export default IngridientItem;
