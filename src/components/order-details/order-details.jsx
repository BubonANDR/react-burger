import React from "react";
import done from "../../images/done.svg";
import styles from './order-details.module.css'

const OrderDetails = () => {
  return (
    <>
      <p className="text text_type_digits-large pt-30">67899</p>
      <p className="text text_type_main-large pt-8">идентификатор заказа</p>
      <img src={done}  className={`${styles.orderStatusPicture} pt-15`} alt="ГОТОВО!"/>
      <p className="text text_type_main-medium pt-15 ">
        Ваш заказ начали готовить
      </p>
      <p className="text text_type_main-medium pt-2 pb-30">
        Дождитесь готовности на орбитальной станции
      </p>
    </>
  );
};
export default OrderDetails;
