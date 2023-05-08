import React, { FC } from "react";
import {
  DragIcon,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { useDrag, useDrop } from "react-dnd";


import {
  deleteItem,
  moveItem,
} from "../../services/actions/burger-constructor";
import styles from "./list-item.module.css";
import { IIngrigients } from "../../types/types";
import { useTypedDispatch } from "../../hooks/Hooks";

export interface IListItem {
  ingridient:IIngrigients;
  n:number;
  name:string;
  price:number;
  image_mobile:string;
  
}

const ListItem:FC<IListItem> = ({ingridient, n}) => {
  const dispatch = useTypedDispatch()

  const [{ isDrag }, dragRef] = useDrag({
    type: "constructor",
    item: ingridient,
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  const [{ isHover }, dropRef] = useDrop({
    accept: "constructor",
    drop(item) {
      dispatch(deleteItem(item)) && dispatch(moveItem(item, n));
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  });

  const ref = React.useRef<HTMLLIElement>(null);

  const dragDropRef = dropRef(dragRef(ref));

  return (
    <>
      <li
        className={styles.itemElement}
        ref={dragDropRef as React.LegacyRef<HTMLLIElement>}
        style={{
          opacity: isDrag || isHover ? 0.5 : 1,
          backgroundColor: isHover ? "#801AB2" : "#131316",
          borderRadius: isHover ? "50px" : "none",
        }}
      >
        <DragIcon type="primary" />
        <ConstructorElement
          text={ingridient.name }
          price={ingridient.price }
          thumbnail={ingridient.image_mobile }
          handleClose={() => dispatch(deleteItem(ingridient))}
        />
      </li>
    </>
  );
};

export default ListItem;
