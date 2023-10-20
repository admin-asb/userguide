import classes from "./GetWinning.module.css";

const AmountOnlineWinnings = props => {
  return (
    <>
      <div className={`${classes["blue-box"]} ${classes["blue-small-box"]}`}>
        До 20 700 ₸
      </div>
      <div className={`${classes["blue-box"]} ${classes["blue-small-box"]}`}>
        От 20 700 ₸ до {props.offlineSum || "250 000"} ₸
      </div>
      <div className={`${classes["blue-box"]} ${classes["blue-small-box"]}`}>
        Свыше {props.offlineSum || "250 000"} ₸
      </div>
    </>
  );
};

export default AmountOnlineWinnings;
