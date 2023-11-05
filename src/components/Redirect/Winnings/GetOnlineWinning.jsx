import classes from "./GetWinning.module.css";
import AmountOnlineWinnings from "./AmountOnlineWinnings";

const GetOnlineWinning = (props) => {
  const onlineWinningTitles = [
    "На сайте / В приложении",
    "С помощью SMS",
    "В приложении Beeline",
  ];

  const shouldPassOnPrevent =
    onlineWinningTitles.includes("С помощью SMS") &&
    onlineWinningTitles.includes("В приложении Beeline");

  return (
    <>
      <h3>{props.onlineTitle}</h3>
      <div className={classes.how__wrapper}>
        {props.change ? (
          <AmountOnlineWinnings
            onWebMin={
              onlineWinningTitles.includes("На сайте / В приложении")
                ? props.onWebsiteMin
                : undefined
            }
            onWebMedium={
              onlineWinningTitles.includes("На сайте / В приложении")
                ? props.onWebMedium
                : undefined
            }
            onWebMax={
              onlineWinningTitles.includes("На сайте / В приложении")
                ? props.onWebMax
                : undefined
            }
            onClickedChange={props.onClickedChange}
            onPrevent={shouldPassOnPrevent ? props.onPrevent : undefined}
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
