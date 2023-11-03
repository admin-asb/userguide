import AmountOnlineWinnings from "./AmountOnlineWinnings";
import classes from "./GetWinning.module.css";

const GetOfflineWinning = props => {
  const offlineWinningTitles = ["Точки продаж", "В филиалах Казпочты"];

  return (
    <>
      <h3>{props.offlineTitle}</h3>
      <div className={classes.how__wrapper}>
        {props.change ? (
          <AmountOnlineWinnings offlineSum={props.offlineSum} />
        ) : (
          <>
            {offlineWinningTitles.map((title, index) => (
              <div
                className={classes["blue-box"]}
                key={index}
                onClick={() => {
                  props.onChangeAmount();
                  props.onChangeSum();
                  props.onPaint();
                }}>
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
