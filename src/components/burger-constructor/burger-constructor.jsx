import React from "react";
import {
  addIngridient,
  resetItems,
  postOrderToApi,
} from "../../services/actions/actions";
import styles from "./burger-constructor.module.css";
import Modal from "../modal/modal";

import {
  ConstructorElement,
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import OrderDetails from "../order-details/order-details";
import { useDispatch, useSelector } from "react-redux";
import { useDrop } from "react-dnd";
import ListItem from "../list-item/list-item";

let prc = 0;
function BurgerConstructor() {
  const dispatch = useDispatch();

  const currentItems = useSelector(
    (store) => store.burgConstructReducer.burgerParts
  );
  const breadsState = useSelector(
    (store) => store.burgConstructReducer.breadsState
  );
  const orderFromApi = useSelector((store) => store.orderReducer.data);
  const [orderModal, setOrderModal] = React.useState(false);
  const closePopup = () => setOrderModal(false);

  const [, dropTargetIngrid] = useDrop({
    accept: ["main", "sauce", "bun"],
    drop(item) {
      dispatch(addIngridient(item));
    },
  });

  const [orderIngrid, setOrderIngrid] = React.useState([
    breadsState._id,
    breadsState._id,
  ]);

  React.useEffect(() => {
    currentItems.forEach((element) =>
      setOrderIngrid((orderIngrid) => [...orderIngrid, element._id])
    );
    return () => setOrderIngrid([breadsState._id, breadsState._id]);
  }, [currentItems]);

  React.useMemo(() => {
    prc = breadsState.price * 2;
    currentItems.forEach((element) => {
      prc = element.price + prc;
    });
  }, [currentItems]);

  const handleButton = () => {
    dispatch(postOrderToApi(orderIngrid));
    dispatch(resetItems());
    setOrderModal(true);
  };

  return (
    <div
      ref={dropTargetIngrid}
      className={`${styles.burgerConstrStyle} pt-25 mb-40`}
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
                item.type !== "bun" && (
                  <ListItem
                    n={n}
                    ingridient={item}
                    key={item.id}
                    className={styles.burgerElement}
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
          >
            Оформить заказ
          </Button>
        )}
      </div>
      {orderModal && orderFromApi.order && (
        <Modal onClose={closePopup}>
          <OrderDetails currentOrder={orderFromApi} />
        </Modal>
      )}
    </div>
  );
}

export default BurgerConstructor;
