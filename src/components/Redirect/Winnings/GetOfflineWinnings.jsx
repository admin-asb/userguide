import AmountOnlineWinnings from "./AmountOnlineWinnings";
import classes from "./GetWinning.module.css";

const GetOfflineWinning = props => {
  return (
    <>
      {props.change ? (
        <AmountOnlineWinnings offlineSum={props.offlineSum} />
      ) : (
        <>
          <div
            className={classes["blue-box"]}
            onClick={() => {
              props.onChangeAmount();
              props.onChangeSum();
            }}>
            Точки продаж
          </div>
          <div
            className={classes["blue-box"]}
            onClick={() => {
              props.onChangeAmount();
              props.onChangeSum();
            }}>
            В филиалах Казпочты
          </div>
        </>
      )}
    </>
  );
};

export default GetOfflineWinning;
