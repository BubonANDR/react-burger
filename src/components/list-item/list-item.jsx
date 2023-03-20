import React from "react";
import {
  DragIcon,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { useDrag, useDrop } from "react-dnd";
import {
  DELETE_ITEM,
  MOVE_ITEM,
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
    
      dispatch(DELETE_ITEM(item));
      dispatch(MOVE_ITEM(item,n));
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
        opacity: isDrag && 0.2,
        opacity: isHover && 0.2,
        backgroundColor:"#131316",  
      }}
    >
      <DragIcon type="primary" />
      <ConstructorElement
        text={props.name}
        price={props.price}
        thumbnail={props.image_mobile}
        handleClose={() => dispatch(DELETE_ITEM(props))}
      />
    </li>
  );
};

ListItem.propTypes = {
  props: PropTypes.object,
  n:PropTypes.number,
};



export default ListItem;
