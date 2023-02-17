import React from "react";
import styles from "./burger-constructor.module.css";
import Modal from "../modal/modal";
import PropTypes from 'prop-types';
import {
  ConstructorElement,
  DeleteIcon,
  DragIcon,
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import OrderDetails from "../order-details/order-details";

function BurgerConstructor({ props }) {
  const [breadsState, setBreadsState] = React.useState({
    elemText: "Краторная булка N-200i",
    elemPicture: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
    elemPrice: 1255,
  });
  const [burgerParts, burgerPartsState] = React.useState([]);

  const [burgerModal, setBurgerModal] = React.useState(false);

  const handleButton = () => setBurgerModal(!burgerModal);
  React.useEffect(() => {
    return ()=>{setBurgerModal(false)}
  }, [handleButton]);


  React.useEffect(() => {
    burgerPartsState([
      ...burgerParts,
      props.map(
        (i) =>
          i.type !== "bun" &&
          burgerParts.push({
            elemId: i._id,
            elemText: i.name,
            elemPicture: i.image_mobile,
            elemPrice: i.price,
          })
      ),
    ]);
  }, []);

  return (
    <div className={`${styles.burgerConstrStyle} pt-25 mb-40`}>
      <ul className={`${styles.burger} mb-10`}>
        <li className={styles.burgerElement}>
          <DragIcon type="primary" />
          <ConstructorElement
            type="top"
            isLocked={true}
            text={breadsState.elemText}
            price={breadsState.elemPrice}
            thumbnail={breadsState.elemPicture}
          />
        </li>
        <div className={styles.burgerScrollArea}>
          {burgerParts.map(
            (item, n) =>
              item.elemId &&
              n < 9 && (
                <li key={item.elemId} className={styles.burgerElement}>
                  <DragIcon type="primary" />
                  <ConstructorElement
                    text={item.elemText}
                    price={item.elemPrice}
                    thumbnail={item.elemPicture}
                  />
                </li>
              )
          )}
        </div>
        <li className={styles.burgerElement}>
          {" "}
          <DragIcon type="primary" />
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={breadsState.elemText}
            price={breadsState.elemPrice}
            thumbnail={breadsState.elemPicture}
          />
        </li>
      </ul>
      <div className={`${styles.info} mt-10`}>
        <div className={styles.totalPrice}>
          <p className="text text_type_digits-medium">122</p>

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
      <Modal toggle={burgerModal}>
        <OrderDetails />
      </Modal>
    </div>
  );
}




export default BurgerConstructor;
