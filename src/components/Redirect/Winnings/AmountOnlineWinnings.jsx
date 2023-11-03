import classes from "./GetWinning.module.css";

const AmountOnlineWinnings = props => {
  return (
    <>
      <div
        className={`${classes["blue-box"]} ${classes["blue-small-box"]}`}
        onClick={() => {
          props.onWebMin();
          props.onClickedChange();
        }}>
        До 20 700 ₸
      </div>
      <div
        className={`${classes["blue-box"]} ${classes["blue-small-box"]}`}
        onClick={() => {
          props.onWebMedium();
          props.onClickedChange();
        }}>
        От 20 700 ₸ до {props.offlineSum || "250 000"} ₸
      </div>
      <div
        className={`${classes["blue-box"]} ${classes["blue-small-box"]}`}
        onClick={() => {
          props.onWebMax();
          props.onClickedChange();
        }}>
        Свыше {props.offlineSum || "250 000"} ₸
      </div>
    </>
  );
};

export default AmountOnlineWinnings;
