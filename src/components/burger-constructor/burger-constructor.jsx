import React from "react";
import { getResponse, RESET_ITEMS,ADD_INGRIDIENT } from "../../services/actions/actions";
import styles from "./burger-constructor.module.css";
import Modal from "../modal/modal";
import PropTypes from "prop-types";
import {
  ConstructorElement,
  DragIcon,
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import OrderDetails from "../order-details/order-details";
import { useDispatch, useSelector } from "react-redux";
import { useDrop} from "react-dnd";
import ListItem from "../list-item/list-item";

function BurgerConstructor() {
  const dispatch = useDispatch();
  const currentItems = useSelector(
    (store) => store.burgConstructReducer.burgerParts
  );
  const breadsState = useSelector(
    (store) => store.burgConstructReducer.breadsState
  );

  const [, dropTargetIngrid] = useDrop({
    accept: ["main", "sauce", "bun"],
    drop(item) {
      dispatch(ADD_INGRIDIENT(item));
    },
  });

  const [burgerModal, setBurgerModal] = React.useState(false);
  const [orderFromApi, setOrderFromApi] = React.useState({});

  const orderIngrid = () => {
    let arrOfIds = [breadsState._id, breadsState._id];
    currentItems.forEach((i) => arrOfIds.push(i._id));
    return arrOfIds;
  };

  const makeOrder = () => {
    fetch("https://norma.nomoreparties.space/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ingredients: orderIngrid() }),
    })
      .then(getResponse)
      .then((res) => {
        setOrderFromApi(res);
        setBurgerModal(true);
      
      });
  };

  const handleButton = () => {
    makeOrder();
    dispatch(RESET_ITEMS());
     };



  React.useEffect(() => {
   
    return () => {
      setBurgerModal(false);
         };
  }, [handleButton]);

  let prc = breadsState.price * 2;

  React.useMemo(() => {
    currentItems.forEach((element) => {
      prc = element.price + prc;
    });
    
  }, [currentItems]);

  return (
    <div
      ref={dropTargetIngrid}
      className={`${styles.burgerConstrStyle} pt-25 mb-40`}
    >
      <ul className={`${styles.burger} m-10`}>
        <li className={styles.breads}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${breadsState.name} (вверх)`}
            price={breadsState.price}
            thumbnail={breadsState.image_mobile}
          />
        </li>
        <div className={styles.burgerScrollArea}>
          {currentItems.length !== 0 ? (
            currentItems.map(
              (item, n) =>
                item.type !== "bun" && (
                  <ListItem
                    n={n}
                    props={item}
                    key={item.id}
                    className={styles.burgerElement}
                  />
                )
            )
          ) : (
            <li className={styles.burgerElement}>
              <DragIcon type="primary" />
              <p className="text text_type_main-medium pr-4">
                Добавте ингридиенты в конструктор
              </p>
            </li>
          )}
        </div>
        <li className={styles.breads}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${breadsState.name} (низ)`}
            price={breadsState.price}
            thumbnail={breadsState.image_mobile}
          />
        </li>
      </ul>
      <div className={`${styles.info} mt-10`}>
        <div className={styles.totalPrice}>
          <p className="text text_type_digits-medium">{prc}</p>

          <CurrencyIcon type="primary" />
        </div>
        <Button
          onClick={handleButton}
          htmlType="button"
          type="primary"
          size="large"
        >
          Оформить заказ
        </Button>
      </div>
      {orderFromApi.order && (
        <Modal toggle={burgerModal}>
          <OrderDetails props={orderFromApi} />
        </Modal>
      )}
    </div>
  );
}

BurgerConstructor.propTypes = {
  props: PropTypes.array,
};

export default BurgerConstructor;
