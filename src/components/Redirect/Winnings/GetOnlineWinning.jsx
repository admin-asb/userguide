import classes from "./GetWinning.module.css";

const GetOnlineWinning = () => {
  return (
    <div className={classes.how__wrapper}>
      <div className={classes["blue-box"]}>На сайте / В приложении</div>
      <div className={classes["blue-box"]}>С помощью SMS</div>
      <div className={classes["blue-box"]}>В приложении Beeline</div>
    </div>
  );
};

export default GetOnlineWinning;
