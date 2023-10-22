import classes from "./GetWinning.module.css";
import AmountOnlineWinnings from "./AmountOnlineWinnings";

const GetOnlineWinning = (props) => {
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
          <AmountOnlineWinnings onWebMin={props.onWebsiteMin} />
        ) : (
          <>
            {onlineWinningTitles.map((title) => (
              <div
                className={classes["blue-box"]}
                onClick={() => {
                  props.onChangeAmount();
                  props.onPaint();
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

export default GetOnlineWinning;
