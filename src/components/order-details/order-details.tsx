import done from "../../images/done.svg";
import styles from "./order-details.module.css";
import { useLocation } from "react-router-dom";
import { resetItems } from "../../services/actions/burger-constructor";
import { useTypedDispatch, useTypedSelector } from "../../hooks/Hooks";
import { Spinner } from "../spinner/spinner";

const OrderDetails = () => {
  let currentOrder = useTypedSelector(store=>store.orderReducer.data)
  const dispatch = useTypedDispatch()
  const location =useLocation()
  location.state ={background:location}
 
  
  if (!currentOrder.order) {
    return (
      <Spinner loadingMessege="Идет загрузка!"/>
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
