import classes from "./GetWinning.module.css";
import AmountOnlineWinnings from "./AmountOnlineWinnings";

const GetOnlineWinning = props => {
  return (
    <>
      {props.change ? (
        <AmountOnlineWinnings />
      ) : (
        <>
          <div
            className={classes["blue-box"]}
            onClick={() => {
              props.onChangeAmount();
              props.onPaint();
            }}>
            На сайте / В приложении
          </div>
          <div className={classes["blue-box"]} onClick={props.onChangeAmount}>
            С помощью SMS
          </div>
          <div className={classes["blue-box"]} onClick={props.onChangeAmount}>
            В приложении Beeline
          </div>
        </>
      )}
    </>
  );
};

export default GetOnlineWinning;
