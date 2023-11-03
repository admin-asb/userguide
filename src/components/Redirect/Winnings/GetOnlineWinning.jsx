import classes from "./GetWinning.module.css";
import AmountOnlineWinnings from "./AmountOnlineWinnings";

const GetOnlineWinning = props => {
  const onlineWinningTitles = [
    "На сайте / В приложении",
    "С помощью SMS",
    "В приложении Beeline",
  ];

  return (
    <>
      <h3>{props.onlineTitle}</h3>
      <div className={classes.how__wrapper}>
        {props.change ? (
          <AmountOnlineWinnings
            onWebMin={props.onWebsiteMin}
            onWebMedium={props.onWebMedium}
            onWebMax={props.onWebMax}
            onClickedChange={props.onClickedChange}
          />
        ) : (
          <>
            {onlineWinningTitles.map((title, index) => (
              <div
                className={classes["blue-box"]}
                key={index}
                onClick={() => {
                  props.onChangeAmount();
                  props.onPaint(2);
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

export default GetOnlineWinning;
