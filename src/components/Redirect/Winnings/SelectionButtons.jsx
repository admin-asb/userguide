import { useState } from "react";
import classes from "./GetWinning.module.css";

const SelectionButtons = props => {
  const [activeBox, setActiveBox] = useState(0);

  return (
    <div className={classes.how__wrapper}>
      <div className={classes["blue-box"]} onClick={props.onOnlineClick}>
        Онлайн
      </div>
      <div className={classes["blue-box"]} onClick={props.onOfflineClick}>
        Точки продаж <br />
        или Казпочта
      </div>
    </div>
  );
};

export default SelectionButtons;
