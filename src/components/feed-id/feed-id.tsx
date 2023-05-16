import React, { useEffect } from "react";
import styles from "./feed-id.module.css";
import { useParams } from "react-router-dom";
import { useTypedDispatch, useTypedSelector } from "../../hooks/Hooks";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { IordersFromApi } from "../order-list/order-list";
import { Spinner } from "../spinner/spinner";

const FeedComponent = () => {
  const { id } = useParams();


  const ordersFromApi: IordersFromApi = useTypedSelector(
    (store) => store.wsReducer.messages
  ).slice(-1)?.[0];

  const ingredientsAll = useTypedSelector(
    (store) => store.burgIngridReducer.data
  );
  const selectedOrder = ordersFromApi?.orders.filter(
    (element) => element._id === id
  )[0];
  let totalPrice = 0;
  
  if (!ordersFromApi) {
    return <Spinner loadingMessege="Идет загрузка!" />;
  } else   
  
  return (
    <div className={styles.feedIdComponent}>
      <p className="text text_type_digits-default ">#{selectedOrder?.number}</p>
      <p className={`${styles.textLeft} text text_type_main-medium pt-10`}>
        {selectedOrder?.name}
      </p>
      <p
        className={`${styles.done} ${styles.textLeft} text text_type_main-default pt-3 `}
      >
        {selectedOrder?.status==="done"? "Готово":"Готовится"}
      </p>
      <p
        className={`${styles.textLeft} text text_type_main-medium pt-15  mb-6`}
      >
        Состав:
      </p>
      <div className={styles.ingridientsScrollArea}>
        {selectedOrder?.ingredients.length !== 0 &&
          selectedOrder?.ingredients.map((item, n) => {
            {
              totalPrice += ingredientsAll.filter(
                (element) => element._id === item
              )[0]?.price;
            }
            if (
              selectedOrder.ingredients
                .slice(0, n)
                .filter((element) => element === item).length === 0
            )
              return (
                <div key={n} className={styles.ingridientListItem}>
                  <div className={styles.ingridient}>
                    <img
                      src={
                        ingredientsAll.filter(
                          (element) => element._id === item
                        )[0]?.image_mobile
                      }
                      alt={
                        ingredientsAll.filter(
                          (element) => element._id === item
                        )[0]?.name
                      }
                    />
                  </div>
                  <p
                    className={`text text_type_main-default ${styles.ingridientName} `}
                  >
                    {
                      ingredientsAll.filter(
                        (element) => element._id === item
                      )[0]?.name
                    }
                  </p>
                  <div className={styles.total}>
                    <p className="text text_type_digits-default ">
                      {
                        selectedOrder.ingredients.filter(
                          (element) => element === item
                        )?.length
                      }{" "}
                      x{" "}
                      {
                        ingredientsAll.filter(
                          (element) => element._id === item
                        )[0]?.price
                      }
                    </p>
                    <CurrencyIcon type="primary" />
                  </div>
                </div>
              );
          })}
      </div>
      <div className={`${styles.footer}`}>
        <p className="text text_type_main-default text_color_inactive">
          {selectedOrder?.updatedAt}
        </p>
        <div className={styles.total}>
          <p className="text text_type_digits-default ">{totalPrice}</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  );
  
};

export { FeedComponent };
