import React from "react";
import PropTypes from "prop-types";

const IngredientDetails = ({ props }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <p
        className="text text_type_main-large pt-10 pl-10"
        style={{ width: 640, textAlign: "left" }}
      >
        Детали ингридиента
      </p>
      <img
        src={props.image_large}
        style={{ width: 480, height: 240 }}
        alt={props.name}
      />
      <p className="text text_type_main-medium pt-4">{props.name}</p>
      <ul
        className="pt-8 pb-15"
        style={{
          listStyle: "none",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          color: "#8585AD",
          textAlign: "center",
          width: 520,
        }}
      >
        <li style={{ display: "block", width: 92 }}>
          <p className="text text_type_main-default">Калории,ккал</p>
          <p className="text text_type_digits-default">{props.calories}</p>
        </li>
        <li style={{ display: "block", width: 92 }}>
          <p className="text text_type_main-default">Белки, г</p>
          <p className="text text_type_digits-default">{props.proteins}</p>
        </li>
        <li style={{ display: "block", width: 92 }}>
          <p className="text text_type_main-default">Жиры, г</p>
          <p className="text text_type_digits-default">{props.fat}</p>
        </li>
        <li style={{ display: "block", width: 92 }}>
          <p className="text text_type_main-default">Углеводы,г</p>
          <p className="text text_type_digits-default">{props.carbohydrates}</p>
        </li>
      </ul>
    </div>
  );
};

IngredientDetails.propTypes = {
  price: PropTypes.number,
  image_large: PropTypes.node,
  name: PropTypes.string,
  calories: PropTypes.number,
  fat: PropTypes.number,
  carbohydrates: PropTypes.number,
  proteins: PropTypes.number,
};

export default IngredientDetails;
