import { useDispatch, useSelector } from "react-redux";
import done from "../../images/done.svg";
import styles from "./order-details.module.css";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { resetItems } from "../../services/actions/burger-constructor";

const OrderDetails = () => {
  let currentOrder = useSelector((store) => store.orderReducer.data);
  const location =useLocation()
  location.state ={background:location}
  const dispatch =useDispatch()
   useEffect(()=>{console.log(currentOrder)},[])


  if (!currentOrder.order) {
    return (
      <div className={styles.loader}>
        <h1>Подождите, Ваш заказ формируется!</h1>
      <div className={styles.spinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      </div>
    );
  } else { dispatch(resetItems());}

   

  return (
    <>
      <p className="text text_type_digits-large pt-30">
        {currentOrder.order.number}
      </p>
      <p
        className={`${styles.orderBurgerName} text text_type_main-large pt-8 pl-2 pr-2`}
      >
        {currentOrder.name}
      </p>
      <img
        src={done}
        className={`${styles.orderStatusPicture} pt-15`}
        alt="ГОТОВО!"
      />
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
