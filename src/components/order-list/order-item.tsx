import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React, { FC } from "react";
import styles from "./order-list.module.css";
import { useTypedSelector } from "../../hooks/Hooks";
import { Link, useLocation } from "react-router-dom";

export interface IOrderitem {
  createdAt: string;
  ingredients: string[];
  name: string;
  number: number;
  status: string;
  updatedAt: string;
  _id: string;
}

interface IProps {
  orderitem: IOrderitem;
  statusShow: boolean;
}

const OrderItem: FC<IProps> = ({ orderitem, statusShow }) => {
  const location = useLocation();

  const handleLinkClick = (event: React.SyntheticEvent<Element, Event>) => {
    console.log(location);
  };

  const ingredientsAll = useTypedSelector(
    (store) => store.burgIngridReducer.data
  );

  let totalPrice = 0;
  return (
    <Link
      className={styles.linkstyle}
      onClick={handleLinkClick}
      to={`${orderitem._id}`}
      state={{ background: location }}
    >
      <div className={styles.order}>
        <div className={styles.orderNumber}>
          <p className="text text_type_digits-default">#{orderitem?.number}</p>
          <p className="text text_type_main-default text_color_inactive">
            {orderitem?.updatedAt}
          </p>
        </div>
        <div className={styles.itemText}>
          <p className="text text_type_main-large">{orderitem?.name}</p>
          {statusShow && (
            <p className="text text_type_main-default pt-2 ml-0">
              {orderitem?.status==="done"? "Готово":"Готовится"}
            </p>
          )}
        </div>
        <div className={styles.ingridLine}>
          <div className={styles.ingridients}>
            {orderitem?.ingredients.length !== 0 &&
              orderitem?.ingredients.map((item: any, n: number) => {
                {
                  totalPrice += ingredientsAll.filter(
                    (element) => element._id === item
                  )[0]?.price;
                }
                if (n < 6) {
                  return (
                    <div
                      className={styles.ingridient}
                      style={{ left: `${n * 48}px`, zIndex: `${-n}` }}
                      key={n}
                    >
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
                  );
                } else {
                  return (
                    <div
                      className={`${styles.ingridient} `}
                      style={{ left: `${6 * 48}px`, zIndex: `${-n}` }}
                      key={n}
                    >
                      <img
                        className={`${styles.opacity}`}
                        src={
                          ingredientsAll.filter(
                            (element) =>
                              element._id === orderitem?.ingredients[6]
                          )[0]?.image_mobile
                        }
                        alt={
                          ingredientsAll.filter(
                            (element) => element._id === item
                          )[0]?.name
                        }
                      />
                      <p
                        className={`text text_type_digits-default ${styles.countOfIngridients} `}
                      >
                        +{orderitem?.ingredients.length - (n + 1)}
                      </p>
                    </div>
                  );
                }
              })}
          </div>
          <div className={styles.total}>
            <p className="text text_type_digits-default">{totalPrice}</p>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export { OrderItem };
