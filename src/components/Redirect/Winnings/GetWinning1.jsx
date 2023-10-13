import classes from "./GetWinning.module.css";
const GetWinning1 = props => {
  return (
    <div className={classes.how__wrapper}>
      <div className={classes["blue-box"]} onClick={props.onOnline}>
        Онлайн
      </div>
      <div className={classes["blue-box"]} onClick={props.onOffline}>
        Точки продаж <br />
        или Казпочта
      </div>
    </div>
  );
};

export default GetWinning1;
