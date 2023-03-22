import React from "react";
import {
  DragIcon,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { useDrag, useDrop } from "react-dnd";
import {
  deleteItem,
   moveItem,
  } from "../../services/actions/actions";
import { useDispatch } from "react-redux";

const ListItem = ({ props,n }) => {
  const dispatch = useDispatch();

  const [{ isDrag }, dragRef] = useDrag({
    type: "constructor",
    item: props,
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  const [{ isHover }, dropRef] = useDrop({
    accept: "constructor",
    drop(item) {
    
      dispatch(deleteItem(item));
      dispatch(moveItem(item,n));
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  });

  const ref = React.useRef(null);
  const dragDropRef = dropRef(dragRef(ref));

  return (
    <li
      ref={dragDropRef}
      style={{
        opacity: (isDrag || isHover) && 0.5,
        backgroundColor: isHover ? "#801AB2": "#131316" ,
        borderRadius: isHover && "50px",    
      }}
    >
      <DragIcon type="primary" />
      <ConstructorElement
        text={props.name}
        price={props.price}
        thumbnail={props.image_mobile}
        handleClose={() => dispatch(deleteItem(props))}
      />
    </li>
  );
};

ListItem.propTypes = {
  props: PropTypes.object.isRequired,
  n:PropTypes.number,
};



export default ListItem;
