import classes from "./GetWinning.module.css";

const AmountOnlineWinnings = (props) => {
  return (
    <>
      <div
        className={`${classes["blue-box"]} ${classes["blue-small-box"]}`}
        onClick={() => {
          if (props.onWebMin) props.onWebMin();
          if (props.onClickedChange) props.onClickedChange();
          if (props.onPrevent) props.onPrevent();
        }}
      >
        До 20 700 ₸
      </div>
      <div
        className={`${classes["blue-box"]} ${classes["blue-small-box"]}`}
        onClick={() => {
          if (props.onWebMedium) props.onWebMedium();
          if (props.onClickedChange) props.onClickedChange();
          if (props.onPrevent) props.onPrevent();
        }}
      >
        От 20 700 ₸ до {props.offlineSum || "250 000"} ₸
      </div>
      <div
        className={`${classes["blue-box"]} ${classes["blue-small-box"]}`}
        onClick={() => {
          if (props.onWebMax) props.onWebMax();
          if (props.onClickedChange) props.onClickedChange();
          if (props.onPrevent) props.onPrevent();
        }}
      >
        Свыше {props.offlineSum || "250 000"} ₸
      </div>
    </>
  );
};

export default AmountOnlineWinnings;
