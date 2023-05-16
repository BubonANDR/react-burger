import React, { FC, useCallback, useEffect } from "react";

import styles from "./burger-constructor.module.css";
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";


import { useDrop } from "react-dnd";
import ListItem from "../list-item/list-item";
import { useLocation, useNavigate } from "react-router-dom";
import { RESET_ORDER, postOrderToApi } from "../../services/actions/order";
import { addIngridient } from "../../services/actions/burger-constructor";
import { IIngrigients } from "../../types/types";
import { useTypedDispatch, useTypedSelector } from "../../hooks/Hooks";
import { getCookie } from "../../services/utils";




let prc:number = 0;
const BurgerConstructor:FC =() =>{
  const dispatch = useTypedDispatch()
  const navigate = useNavigate();
  const location = useLocation();
  const currentItems:IIngrigients[] = useTypedSelector(store=>store.burgConstructReducer.burgerParts)
   const breadsState = useTypedSelector(store=>store.burgConstructReducer.breadsState)
  
  

  const [, dropTargetIngrid] = useDrop({
    accept: ["main", "sauce", "bun"],
    drop(item) {
      dispatch(addIngridient(item));
      console.log(item)
    },
  });

  const [orderIngrid, setOrderIngrid] = React.useState([
    breadsState._id,
    breadsState._id,
  ]);

  React.useEffect(() => {
    currentItems.forEach((element:IIngrigients) =>
      setOrderIngrid((orderIngrid) => [...orderIngrid, element._id])
    );
    return () => setOrderIngrid([breadsState._id, breadsState._id]);
  }, [,currentItems]);

  React.useMemo(() => {
    prc = breadsState.price * 2;
    currentItems.forEach((element:IIngrigients) => {
      prc = element.price + prc;
    });
  }, [currentItems]);

  const handleButton = () => {
    dispatch(postOrderToApi(orderIngrid as string[]))
    return navigate(`/order`, { state: { background: location }})
   };

  useEffect(()=>{return ()=>{dispatch({type:RESET_ORDER})}},[handleButton])

  //useEffect(()=>{console.log(getCookie('token'))})


  return (
    <div
      ref={dropTargetIngrid}
      className={`${styles.burgerConstrStyle} pt-25 mb-40`}
      data-cy="dropTarget"
    >
      <ul className={`${styles.burger} m-10`}>
        {breadsState._id && (
          <li className={styles.breads}>
            <ConstructorElement
              type="top"
              isLocked={true}
              text={`${breadsState.name} (вверх)`}
              price={breadsState.price}
              thumbnail={breadsState.image_mobile}
            />
          </li>
        )}
        {(!breadsState._id || currentItems.length === 0) && (
          <li className={styles.burgerElement}>
            <p className="text text_type_main-medium pl-10">
              Пожалуйста, перенесите сюда булку и ингредиенты для создания
              заказа
            </p>
          </li>
        )}
        <div className={styles.burgerScrollArea}>
          {currentItems.length !== 0 &&
            currentItems.map(
              (item, n) =>
                item.type !== "bun" &&  (
                 
                  <ListItem
                    n={n}
                    ingridient={item}
                    key={item.id}
                    name={item.name}   
                    price ={item.price}
                    image_mobile ={item.image_mobile}                
                  />
                  
                )
            )}
        </div>
        {breadsState._id && (
          <li className={styles.breads}>
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={`${breadsState.name} (низ)`}
              price={breadsState.price}
              thumbnail={breadsState.image_mobile}
            />
          </li>
        )}
      </ul>
      <div className={`${styles.info} mt-10`}>
        <div className={styles.totalPrice}>
          <p className="text text_type_digits-medium">{prc}</p>

          <CurrencyIcon type="primary" />
        </div>
        {breadsState._id && (
          <Button
            onClick={handleButton}
            htmlType="button"
            type="primary"
            size="large"
            data-cy="orderButton"
          >
            Оформить заказ
          </Button>
        )}
      </div>
    </div>
  );
}

export default BurgerConstructor;
