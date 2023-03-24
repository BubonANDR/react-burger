import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

const IngridTab = () => {
  const [current, setCurrent] = React.useState("Булки");

  React.useEffect(() => {
    const srrBar = document.getElementById("scrl");
    srrBar.onscroll = function () {
      let currScrollPosition = srrBar.scrollTop;
      if (currScrollPosition > 950) {
        setCurrent("Начинки");
      } else if (currScrollPosition > 370) {
        setCurrent("Соусы");
      } else {
        setCurrent("Булки");
      }
    };
  });

  return (
    <div style={{ display: "flex" }}>
      <Tab value="Булки" active={current === "Булки"} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="Соусы" active={current === "Соусы"} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="Начинки" active={current === "Начинки"} onClick={setCurrent}>
        Начинки
      </Tab>
    </div>
  );
};

export default IngridTab;
