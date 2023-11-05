import AmountOnlineWinnings from "./AmountOnlineWinnings";
import classes from "./GetWinning.module.css";

const GetOfflineWinning = (props) => {
  const offlineWinningTitles = ["Точки продаж", "В филиалах Казпочты"];

  return (
    <>
      <h3>{props.offlineTitle}</h3>
      <div className={classes.how__wrapper}>
        {props.change ? (
          <AmountOnlineWinnings
            offlineSum={props.offlineSum}
            onClickedChange={props.onClickedChange}
            onPrevent={props.onPrevent}
          />
        ) : (
          <>
            {offlineWinningTitles.map((title, index) => (
              <div
                className={classes["blue-box"]}
                key={index}
                onClick={() => {
                  props.onChangeAmount();
                  props.onChangeSum();
                  props.onPaint(2);
                }}
              >
                {title}
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default GetOfflineWinning;
